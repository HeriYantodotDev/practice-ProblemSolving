def main():    
    print(fct ('fboaor',2))
    print(fct ('fbboaaorz',3))
    print(fct ('sejpgoagkmse',5))

def fct(arg1,arg2):

    list_string = list(arg1) #create a list of the first argument
    list_len = len(list_string) #capture the length value of the list
    total_index = list_len // (list_len//arg2) #find the total item number list item based on the step level
    new_list = [] #a new list for output

    #starting the loop to create a new list
    cek = 0 #this is the start range for the loop
    sum_all = 0 # to check the total in the new list
    while cek < total_index:
        c= "" #variable to store the value for each list item
        for i in range(cek, list_len, arg2):
            c = c + list_string[i] #capture the value 
        cek += 1 #
        sum_all = sum_all + len(c)
        new_list.append(c) #adding the new item to the list
        if sum_all == list_len:
            break
    return new_list

if __name__ == '__main__': main()
