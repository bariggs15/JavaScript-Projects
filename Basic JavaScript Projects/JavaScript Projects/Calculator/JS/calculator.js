//creates object to keep track of values
const Calculator = {
    Display_Value: '0', //0 on screen
    First_Operand:null,//will hold 1st op for any expressions
    Wait_Second_Operand: false, //check whether second operand has been input
    operator: null, //this will hold the operator
};

function Input_Digit(digit) {//modifies value each time a button is clicked
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //checking to see if wait2ndop is true
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrite displayvalue if current value is 0, otherwise will add to it
        Calculator.Display_Value === '0' ? digit : Display_Value + digit;
    }

}

function Input_Decimal(dot) {
    ///handles decimals
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Wait_Second_Operand.includes(dot)) {
        ///saying that if the display value doesn't have a decimal we want to add one
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator
    //when operator is pressed, covert the number on screen and then store in calculator.frist if doesn't exist
    const Value_of_Input = parseFloat(Display_Value); 
    //checks if an operator already exists and if wait second operand is true
    if (operator && Calculator.Wait_Second_Operand){
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null) {
        Calculator.First_Operand=Value_of_Input;
    } else if (operator) {
        ///check if operator exists already
        const Value_Now = First_Operand || 0;
        //  if it exists, property lookup is performed 
        let result = Perform_Calculations[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9)
        result = (result*1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
    
}

const Perform_Calculations= {
    '/':(First_Operand, Second_Operand) => First_Operand/Second_Operand, 
    '*':(First_Operand, Second_Operand) => First_Operand*Second_Operand,
    '+':(First_Operand, Second_Operand) => First_Operand+Second_Operand,
    '-':(First_Operand, Second_Operand) => First_Operand-Second_Operand,
    '=':(First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {//update screen with contents of display value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display(); //monitors button clicks
const keys = document.querySelector('.calculator-keys'); 
keys.addEventListener('click', (event) => {
    const {target} = event;
    if(!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset(target.value);
        Update_Display();
        return;    
    }
    Input_Digit(target.value);
    Update_Display();
})  