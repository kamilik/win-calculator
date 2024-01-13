function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

function equal() {
    var exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}

function sqrt() {
    var sq = document.form.textview.value;
    if(sq) {
        document.form.textview.value = eval(Math.sqrt(sq));
    }
}

function onediv() {
    var od = document.form.textview.value;
    if(od) {
        document.form.textview.value = eval(1/od);
    }
}

function cos() {
    var co = document.form.textview.value;
    if(co) {
        document.form.textview.value = eval(Math.cos(co));
    }
}

function sin() {
    var si = document.form.textview.value;
    if(si) {
        document.form.textview.value = eval(Math.sin(si));
    }
}

function tg() {
    var tg = document.form.textview.value;
    if(tg) {
        document.form.textview.value = eval(Math.tan(tg));
    }
}

function ctg() {
    var ct = document.form.textview.value;
    if(ct) {
        document.form.textview.value = eval(1/Math.tan(ct));
    }
}

function ce() {
    onclick="str = document.form.textview.value.slice(0, -1);document.form.textview.value = str;"
}

function pressNum(num) { // when you press a number key
    if (displayCleared) { // has the "CE" button been pressed?
      screenTotal = num; // then make screenTotal = new entry
      displayCleared = false; // now forget about it
    } else {
      screenTotal = screenTotal + num; // otherwise, add the new entry to the end of screenTotal
    }
    display.innerHTML = screenTotal;
    if (carryOver) {
      num1 = carryNum;
      num2 = screenTotal + num;
      display.innerHTML = screenTotal;
      carryOver = false;
    }
  };

  