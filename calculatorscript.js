const buttons = document.querySelectorAll("#button_selector");
const container = document.querySelector("#container");
const clear_button = document.querySelector("#clear-layout");
const equal_sign = document.querySelector("#equal-selector")

let stored_variable_a = "";
let stored_variable_b = "";
let comparison_value = "";
let operator = "";
let temp_operator = ""

function add(a, b){
    stored_variable_a = a + b;
}

function subtract(a, b){
    stored_variable_a = a-b;
}

function multiply(a , b){
    stored_variable_a = a*b;
}

function divide(a,b){
    stored_variable_a = a/b;
}

function check_operator(operator, stored_variable_a, stored_variable_b){
    if(operator === "+"){
        add(stored_variable_a, stored_variable_b);
    }else if(operator ==="-"){
        subtract(stored_variable_a, stored_variable_b);
    }else if(operator === "*"){
        multiply(stored_variable_a, stored_variable_b);
    }else if(operator === "/"){
        divide(stored_variable_a, stored_variable_b)
    }
}

function clearing_display_attribute(){
    const display_attribute = document.querySelector("#display_attribute");
    const container = document.querySelector("#container");
    comparison_value = "";
    display_attribute.textContent = "";
} 

function symbols_check(initial_click){
    if(["+", "-", "/", "*"].includes(initial_click)){
        operator = initial_click;
        initial_click ="";
    } 
    const display_attribute = document.querySelector("#display_attribute");
    const container = document.querySelector("#container");
    console.log(display_attribute.textContent.length)
    if (display_attribute.textContent.length===0){
        alert("You have clicked an operator too many times. Please choose your operator again.");
        display_attribute.textContent = stored_variable_a;
        stored_variable_a = "";
        container.appendChild(display_attribute);
    }else{
        if(stored_variable_a.length > 0 && stored_variable_a.length > 0 ){
            check_operator(temp_operator, parseFloat(stored_variable_a,10), parseFloat(stored_variable_b,10));
            stored_variable_a = " " + stored_variable_a;
            display_attribute.textContent=stored_variable_a;
            comparison_value = stored_variable_a;
            container.appendChild(display_attribute);
            temp_operator = "";
            stored_variable_b = "";
        }else{
            display_para = display_attribute.textContent;
            stored_variable_a = display_para;
            display_attribute.textContent=stored_variable_a;
            comparison_value = stored_variable_a;
            container.appendChild(display_attribute);
        }
}
}

function Entering_in_Numbers(initial_click){
    const display_attribute = document.querySelector("#display_attribute");
    const container = document.querySelector("#container")
     if (display_attribute === null ){
        create_existence(initial_click);
    }else{
        if(["+", "-", "/", "*"].includes(initial_click)){
            initial_click ="";
        }
        const display_para = display_attribute.textContent;
        display_attribute.textContent = display_para+initial_click;
        container.appendChild(display_attribute);
        if (stored_variable_b === ""){
            stored_variable_b = display_attribute.textContent
        }else if (stored_variable_b.length > 0 && operator.length > 0){
            stored_variable_b = display_attribute.textContent;
            temp_operator = operator; 
        }
    }
    }

function create_existence(initial_click){
        const container = document.querySelector("#container")
        const display_attribute = document.createElement("p");
        display_attribute.id = "display_attribute";
        display_attribute.textContent = initial_click;
        container.appendChild(display_attribute);
}

for (i of buttons){
    i.addEventListener("click", function(e){
            if (comparison_value.length > 0){
                clearing_display_attribute()
            }
            initial_click = e.target.value;
            Entering_in_Numbers(initial_click);
            if(["+", "-", "/", "*"].includes(initial_click)){
                symbols_check(initial_click);
            }       
})
}

clear_button.addEventListener("click", function(){
    const display_attribute = document.querySelector("#display_attribute");
    const container = document.querySelector("#container");
    display_attribute.textContent="";
    stored_variable_a = "";
    stored_variable_b = "";
    comparison_value = "";
    operator = "";
    container.appendChild(display_attribute);
})

equal_sign.addEventListener("click", function(e){
    const display_attribute = document.querySelector("#display_attribute");
    const container = document.querySelector("#container");
    check_operator(temp_operator, parseFloat(stored_variable_a,10), parseFloat(stored_variable_b,10));
    stored_variable_a = " " + stored_variable_a;
    display_attribute.textContent=stored_variable_a;
    comparison_value = stored_variable_a;
    container.appendChild(display_attribute);
    temp_operator = "";
    stored_variable_b = "";
})