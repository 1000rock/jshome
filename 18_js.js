function btn_click() {
    const name = document.getElementById("name");
    const age = document.getElementById("age");

    
    console.log(name.value)
    console.log(age.value)
    var N_age = parseInt(age.value);
    const result = document.getElementById("result");
    var msg = name.value + '님은 내년에' + (N_age + 1) + "살이 되는군요!";
    result.innerText = msg;
}
