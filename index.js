const calc = () => {
    let result = document.querySelector(".result");
    let first = document.querySelector(".first");
    let second = document.querySelector(".second").value;
    let enable = document.querySelector(".enable");
    let disable = document.querySelector(".disable");


    result.textContent = Number(first) + Number(second);


};
