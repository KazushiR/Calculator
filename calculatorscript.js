const buttons = document.querySelectorAll("#button_selector");
const container = document.querySelector("#container");
const clear_button = document.querySelector("#clear-layout");
const equal_sign = document.querySelector("#equal-selector")

let stored_variable_a = "";
let stored_variable_b = "";
let comparison_value = "";
let operator = "";
let temp_operator = "";

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
    //takes the DOM element and then clears out the content so users are able to continously add values until needed//
    const display_attribute = document.querySelector("#display_attribute");
    comparison_value = "";
    display_attribute.textContent = "";
} 

function symbols_check(initial_click){
    if(["+", "-", "/", "*"].includes(initial_click)){
        //this allows the function to check if there is a symbol and assign it to the "operator" variable//
        operator = initial_click;
        initial_click ="";
    } 
    const display_attribute = document.querySelector("#display_attribute");
    const container = document.querySelector("#container");
    if (display_attribute.textContent.length === 0){
        //if a symbol is pressed more then once, this alert is created.//
        //alert is activated if the display_attribute empty or not//
        //assigned the variable "stored_variable_a" to the display_attribute so it can reset the store variable to text.content"//
        alert("You have clicked an operator too many times. Please choose your operator again.");
        display_attribute.textContent = stored_variable_a;
        stored_variable_a = "";
        container.appendChild(display_attribute);
    }else{
        if(stored_variable_a.length > 0 && stored_variable_a.length > 0 ){
            //checks to see if there are two variables to calculate and uses the temp_operator for the operator symbol//
            check_operator(temp_operator, parseFloat(stored_variable_a,10), parseFloat(stored_variable_b,10));
            //calculates stored_variable_a and turns it back into a string//
            stored_variable_a = " " + stored_variable_a;
            //puts the stored_variable_a into textContent to be displayed on the web application//
            display_attribute.textContent=stored_variable_a;
            comparison_value = stored_variable_a;
            //stores a comparison_value to be used in clearing_display_attribute() function//
            container.appendChild(display_attribute);
            //resets the temp_operator and store_variable_b//
            temp_operator = "";
            stored_variable_b = "";
        }else{
            //if the above conditions are not met, it creates a stored_variable_a to be used as a placeholder to calculate out the function later.//
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
    const container = document.querySelector("#container");
     if (display_attribute === null ){
        //checks to see if display_attribute is already made or not//
        create_existence(initial_click);
    }else{
        if(["+", "-", "/", "*"].includes(initial_click)){
            //if the initial function e inclues a symbol, sets it to nothing so the symbol cannot be added to the final numerical value//
            initial_click ="";
        }
        //gets the text content each time a numerical value is entered//
        const display_para = display_attribute.textContent;
        //adds the numerical value together until the user is done//.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        display_attribute.textContent = display_para+initial_click;
        container.appendChild(display_attribute);
        if (stored_variable_b === ""){
            //creates a variable to calculate the operatore per above//
            stored_variable_b = display_attribute.textContent
        }else if (stored_variable_b.length > 0 && operator.length > 0){
            //if the above conditions are met, the mathematical symbol of "operator" is stored in "temp_operator later"//
            //This is used because a stable mathematical symbol needed to be used as each click was changing the "operator" variable each time it was used//
            stored_variable_b = display_attribute.textContent;
            temp_operator = operator; 
        }
    }
    }

function create_existence(initial_click){
        //creates the existence of display attribute and sets an id to be called later//
        const container = document.querySelector("#container")
        const display_attribute = document.createElement("p");
        display_attribute.id = "display_attribute";
        display_attribute.textContent = initial_click;
        container.appendChild(display_attribute);
}

for (i of buttons){
    i.addEventListener("click", function(e){
            if (comparison_value.length > 0){
                // function erases textcontent to write new number values//
                clearing_display_attribute()
            }
            initial_click = e.target.value; //targets the buttons and iterates through//
            Entering_in_Numbers(initial_click); //function allows user to add numbers into web application//
            if(["+", "-", "/", "*"].includes(initial_click)){
                symbols_check(initial_click); //functions checks to see if symbols is pressed more then once and calculates values//
            }       
})
}

clear_button.addEventListener("click", function(){
    //EventListeners clears every global variable and allows the script to be cleared//
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
    //This function calculates then clears all global variables//
    const display_attribute = document.querySelector("#display_attribute");
    const container = document.querySelector("#container");
    check_operator(temp_operator, parseFloat(stored_variable_a,10), parseFloat(stored_variable_b,10));
    stored_variable_a = " " + stored_variable_a; //turns this variable into a string to be added into text content//
    display_attribute.textContent=stored_variable_a;
    container.appendChild(display_attribute);
    stored_variable_a = "";
    stored_variable_b = "";
    comparison_value = "";
    operator = "";
    stored_variable_b = "";
})