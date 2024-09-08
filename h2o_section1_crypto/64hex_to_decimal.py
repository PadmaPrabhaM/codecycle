
hex_string = "58c9af0052be77cc16990dc830392890ea6427b502249d2a02b9b5e9b0051d49"

first_32 = hex_string[:32]
second_32 = hex_string[32:64]

first_32_decimal = int(first_32, 16)
second_32_decimal = int(second_32, 16)

print(first_32_decimal, second_32_decimal)