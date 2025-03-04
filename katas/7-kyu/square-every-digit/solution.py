def square_digits(num):
    # Your code here
    output = ""
    for i in str(num):
        output = output + str(int(i)**2)
    return int(output)