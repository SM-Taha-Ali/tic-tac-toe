//  Geting boxes

var result_box = document.getElementById("result-box");

var r1c1 = document.getElementById('r1c1');
var r1c2 = document.getElementById('r1c2');
var r1c3 = document.getElementById('r1c3');

var r2c1 = document.getElementById('r2c1');
var r2c2 = document.getElementById('r2c2');
var r2c3 = document.getElementById('r2c3');

var r3c1 = document.getElementById('r3c1');
var r3c2 = document.getElementById('r3c2');
var r3c3 = document.getElementById('r3c3');


var boxes = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3];

var btns = document.getElementsByClassName('btn')

var turn = true;


function resultCheck() {
    if ((r1c1.innerHTML == r2c1.innerHTML) && (r1c1.innerHTML == r3c1.innerHTML)) {
        if (r1c1.innerHTML != '' && r2c1.innerHTML != '' && r3c1.innerHTML != '') {
            return r1c1.innerHTML
        }
    }
    if ((r1c2.innerHTML == r2c2.innerHTML) && (r1c2.innerHTML == r3c2.innerHTML)) {
        if (r1c2.innerHTML != '' && r2c2.innerHTML != '' && r3c2.innerHTML != '') {
            return r1c2.innerHTML
        }
    }
    if ((r1c3.innerHTML == r2c3.innerHTML) && (r1c3.innerHTML == r3c3.innerHTML)) {
        if (r1c3.innerHTML != '' && r2c3.innerHTML != '' && r3c3.innerHTML != '') {      
            return r1c3.innerHTML
        }
    }
    if ((r1c1.innerHTML == r1c2.innerHTML) && (r1c1.innerHTML == r1c3.innerHTML)) {
        if (r1c1.innerHTML != '' && r1c2.innerHTML != '' && r1c3.innerHTML != '') {   
            return r1c1.innerHTML
        }
    }
    if ((r2c1.innerHTML == r2c2.innerHTML) && (r2c1.innerHTML == r2c3.innerHTML)) {
        if (r2c1.innerHTML != '' && r2c2.innerHTML != '' && r2c3.innerHTML != '') {   
            return r2c1.innerHTML
        }
    }
    if ((r3c1.innerHTML == r3c2.innerHTML) && (r3c1.innerHTML == r3c3.innerHTML)) {
        if (r3c1.innerHTML != '' && r3c2.innerHTML != '' && r3c3.innerHTML != '') {            
            return r3c1.innerHTML
        }
    }
    if ((r2c2.innerHTML == r1c1.innerHTML) && (r2c2.innerHTML == r3c3.innerHTML)) {
        if ( r2c2.innerHTML != '' && r1c1.innerHTML != '' &&  r3c3.innerHTML != '') {            
            return r2c2.innerHTML
        }
    }

    if ((r2c2.innerHTML == r3c1.innerHTML) && (r2c2.innerHTML == r1c3.innerHTML)) { 
        if ( r2c2.innerHTML != '' && r3c1.innerHTML != '' &&  r1c3.innerHTML != '') {            
            return r2c2.innerHTML
        }
    }

    else {
        if (
            r1c1.innerHTML != '' &&
            r1c2.innerHTML != '' &&
            r1c3.innerHTML != '' &&

            r2c1.innerHTML != '' &&
            r2c2.innerHTML != '' &&
            r2c3.innerHTML != '' &&

            r3c1.innerHTML != '' &&
            r3c2.innerHTML != '' &&
            r3c3.innerHTML != ''
        ){
            return false
        }
    }
}


function clickHandler(btn) {
    if (turn == true) {
        btn.innerHTML = "X"
        btn.disabled = true
        btn.setAttribute('class', 'btn text-danger')
        var result = resultCheck()
        turn = false
    }
    else if (turn == false) {
        btn.innerHTML = "O"
        btn.disabled = true
        btn.setAttribute('class', 'btn text-primary')
        var result = resultCheck()
        turn = true
    }
    if (result != false && result != undefined) {
        for (let index = 0; index < btns.length; index++) {
            btns[index].disabled = true
        }
        result_box.innerHTML = result + " Win"
    }
    if (result == false) {
        result_box.innerHTML = "Draw"
    }
}