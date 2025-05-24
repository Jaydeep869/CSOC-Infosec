import sys
def run_desilang(code):
    variables = {}
    lines = code.split('\n')

    for line in lines:
        line = line.strip()
        if line == "":
            continue
        if line.startswith("chap-do"):
            expr = line[8:].strip()
            try:
                result = eval(expr, {}, variables)
                print(result)
            except Exception as e:
                print("Error:", e)
        elif line.startswith("set-kar"):
            try:
                rest = line[8:].strip()
                var, expr = rest.split("=", 1)
                var = var.strip()
                expr = expr.strip()
                value = eval(expr, {}, variables)
                variables[var] = value
            except Exception as e:
                print("Error in set-kar:", e)
        elif line.startswith("agar") and "then" in line:
            try:
                condition_part, command_part = line[5:].split("then", 1)
                condition = condition_part.strip()
                command = command_part.strip()
                if eval(condition, {}, variables):
                    if command.startswith("chap-do"):
                        expr = command[8:].strip()
                        print(eval(expr, {}, variables))
                    else:
                        print("Only chap-do supported after 'then' for now.")
            except Exception as e:
                print("Error in agar:", e)

        else:
            print("Unknown DesiLang command:", line)
def load_dsl_file(filename):
    with open(filename, 'r') as file:
        code = file.read()
    run_desilang(code)
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 desilang.py <filename.dsl>")
    else:
        filename = sys.argv[1] 
        if (filename.split(".")[-1] != "dsl"):
            print("Error: File extension must be .dsl")
        else:
            load_dsl_file(filename)