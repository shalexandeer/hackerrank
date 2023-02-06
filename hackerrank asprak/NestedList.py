def nestedList(user):
    arr = {}
    student = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]
    student.sort(key=lambda a: a[1])
    
    
    for i in range(0,len(student)):
        if f'{student[i][1]}' in arr:
            arr[f'{student[i][1]}'] += 1
        else:
            arr[f'{student[i][1]}'] = 0
    print(arr)

user = 5
nestedList(user)