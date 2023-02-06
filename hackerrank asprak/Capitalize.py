def solve(s):
    end = ''
    s = s.split(' ')
    for i in s:
        end += (f'{i.capitalize()} ')
    return end
print(solve("hello world"))