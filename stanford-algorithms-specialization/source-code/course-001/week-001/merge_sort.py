arr = [92, 4, 5, 3, 1, 7, 8, 10]


def merge_sort(list):
    if len(list) > 1:
        half = len(list)//2
        i = j = k = 0
        left = list[:half]
        right = list[half:]
        merge_sort(left)
        merge_sort(right)

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                list[k] = left[i]
                i += 1
            else:
                list[k] = right[j]
                j += 1
            k += 1

        while i < len(left):
            list[k] = left[i]
            k += 1
            i += 1

        while j < len(right):
            list[k] = right[j]
            k += 1
            j += 1

print ("array is :")
for i in range(len(arr)):
    print (arr[i], end = " ")
print()

merge_sort(arr)
print ("array is :")
for i in range(len(arr)):
    print (arr[i], end = " ")

