


user = int(input())
for i in range(user):
    try:
        masuk = input().split()
        bagi = int(masuk[0]) // int(masuk[1])
        print(bagi)
    except ZeroDivisionError as e:
        print("Error code:",e)
    except ValueError as e:
        print("Error code:",e)