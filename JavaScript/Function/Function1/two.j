function add(a, b, c = 100) {
    console.log(a + b + c)
}

add(1, 2, 3)    //6
add(1, 2)       //103
add(10, 20, 30) //60
add("Rahul", "Gandhi")