//create objects to keep track of the values
const Calculator = {
    //this will display 0 on the calculator screen
    Display_Value: "0",
    //this will hold the first operand for any expression, we set it to null for now.
    First_Operand: null,
    //this checks wether or not the second operand has been inputed by the user
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now.
    operator: null,
};

// this modifies values each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //this checks if the Wait_Second_Operand is true and sets Display_Value
    //to the key that was clicked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites Display_Value if the current value is 0
        // otherwise it adds onto it
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

// this section handles the decimal point

function Input_Decimal(dot) {
    // this ensures that accidental clicking of the decimal point  doesnt
    //cause bugs in the operation
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the displa_value does not contain a decimal point
        // we want to add decimal point
        Calculator.Display_Value += dot;
    }
}

//this section handles operators

function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator key is pressed we convert the current number
    //displayed on the screen to a number and then store the result in
    // calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator an exits from the function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        //Checks if an operator already exist
        const Value_Now = First_Operand || 0;
        //if operator exists, property looked up is performed for the operator
        //in the Perform_Calculation object and the function that matches the 
        // operator is executed.
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //here we add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed (9);
        // this will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// this function updates the calculator screen with the contents of Display_Value
function Update_Display() {
    //make use of the calculator screen class to target the 
    // input tag in the html document
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    //the target variable is an object that represent the element
    //that was clicked
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return
    }
    //ensures that AC clears all inputs from the calculator screen
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
} )