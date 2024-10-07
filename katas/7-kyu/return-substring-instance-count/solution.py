def solution(full_text, search_text):
    c = 0
    i = 0
    data = ''
    if search_text == '':
        return len(full_text) + 1
    while i < len(full_text):
        data+= full_text[i]
        if data.find(search_text) != -1:
            c+= 1
            data = ''
        i+= 1
    return c