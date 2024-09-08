
((globalThis) => {
    const core = Deno.core
    globalThis.Deno = globalThis.Deno || {};
    globalThis.Deno.env = {
        get: (key) => {
            const envVars = {
                DEBUG: "true", 
            };
            return envVars[key] || undefined;
        },
    };
    function argsToMessage(...args) {
        return args.map((arg) => JSON.stringify(arg)).join(" ");
    }
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }
    const debugFlag = Deno.env.get("DEBUG") === "true"; 
    globalThis.console = {
        log: (...args) => {
            core.print(`[log] [${getCurrentTime()}]: ${argsToMessage(...args)}\n`, false);
        },
        warn: (...args) => {
            const message = `[warn] [${getCurrentTime()}]: ${argsToMessage(...args)}`;
            const formattedMessage = `\x1b[33m${message}\x1b[0m`; 
            core.print(`${formattedMessage}\n`, true);
        },
        error: (...args) => {
            const message = `[error] [${getCurrentTime()}]: ${argsToMessage(...args)}`;
            const formattedMessage = `\x1b[31m${message}\x1b[0m`; 
            core.print(`${formattedMessage}\n`, true);
        },
        debug: (...args) => {
            if (debugFlag) {
                const message = `[debug] [${getCurrentTime()}]: ${argsToMessage(...args)}`;
                const formattedMessage = `\x1b[36m${message}\x1b[0m`;
                core.print(`${formattedMessage}\n`, true);
            }
        }
    };
})(globalThis);
