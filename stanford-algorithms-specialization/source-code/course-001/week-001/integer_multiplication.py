# calculate integer multiplication using recursion
def multi(a, b):
    if a == 0 or b == 0:
        return 0
    if b == 1:
        return a
    else:
        return a + multi(a, b - 1)
    
print(multi(3, 1))
print(multi(3, 2))
print(multi(1, 4))
print(multi(4, 64))
print(multi(4, 0))
print(multi(0, 0))
print(multi(4, 1))
# does not work with negative integers

# print(multi(20, -20))