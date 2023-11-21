def sort_array(source_array):

    template = []
    my_odds = []
    
    for num in source_array:
        if num % 2 == 0:
            template.append("even")
        else:
            template.append("odd")
            my_odds.append(num)

    my_odds.sort()
    my_odds.reverse()
    
    result = []
    for i in range(len(source_array)):
        if template[i] == "odd":
            result.append(my_odds[-1])
            my_odds.pop()
        else:
            result.append(source_array[i])
    return result