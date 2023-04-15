def main():    
    print(fct ('fboaor',2)) #['foo', 'bar']
    print(fct ('fbboaaorz',3)) #['foo', 'bar', 'baz']
    print(fct ('sejpgoagkmse',3)) #['spam', 'eggs', 'joke']

def fct(arg1,arg2): 
    return [ arg1[x::arg2]  for x in range(arg2)]  

if __name__ == '__main__': main()
