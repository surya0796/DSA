def bubble_sort(arr):
    len_arr = len(arr)
    for idx1 in range(len_arr):
        count= 0
        for idx2 in range(len_arr-idx1-1):
            print(idx2)
            if arr[idx2] >= arr[idx2+1]:
                
                arr[idx2], arr[idx2+1] = arr[idx2+1], arr[idx2]

                count += 1
        if count == 0:
            print("yes count was zero")
            break        
    return arr
arr = [1,2,3,4,5,6]
print(bubble_sort(arr))


