function count (n){
    return function() {
         return n++
    }
}

let counter =  count(6)
counter()
counter()
counter()

