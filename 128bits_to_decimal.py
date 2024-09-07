hex_string = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000048324f207465616d"

first_32_hex = hex_string[:32]
second_32_hex = hex_string[32:64]
third_32_hex = hex_string[64:96]
fourth_32_hex = hex_string[96:128]

first_32_decimal = int(first_32_hex, 16)
second_32_decimal = int(second_32_hex, 16)
third_32_decimal = int(third_32_hex, 16)
fourth_32_decimal = int(fourth_32_hex, 16)

print(first_32_decimal,second_32_decimal,third_32_decimal, fourth_32_decimal)