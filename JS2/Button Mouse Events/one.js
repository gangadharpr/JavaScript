function display1() {
    console.log("id1")
    let ref = document.getElementById('id1')
    console.log(ref)
    ref.style.backgroundColor = "green"
}

function display2() {
    console.log("id2")
    let ref = document.getElementById('id2')
    console.log(ref)
    ref.style.backgroundColor = "red"
}

function display3() {
    console.log("id3")
    let ref = document.getElementById('id3')
    console.log(ref)
    ref.style.backgroundColor = "skyblue"
}

function display4() {
    console.log("id4")
    let ref = document.getElementById('id4')
    console.log(ref)
    ref.style.backgroundColor = "brown"
}

function display5() {
    console.log("id5")
    let ref = document.getElementById('id5')
    console.log(ref)
    ref.style.backgroundColor = "blue"
}
/*
function display6() {
    console.log("id6")
    let ref = document.getElementById('id6').value=ref.touppercase();
    console.log(ref)
    ref.style.backgroundColor = "orange"
}*/
function display6(){
    let ref=document.getElementById('id6').value;
    console.log(ref);
    document.getElementById('id6').value=ref.toUpperCase();
}