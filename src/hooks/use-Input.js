import {useState} from 'react';

const useInput =(validateInput)=>{

    const [enteredValue,setEnteredValue]= useState('');
    const [valueIsTouched, setValueIsTouched]= useState(false);

    const valueIsValid = validateInput(enteredValue); 
    const valueIsInvalid = !valueIsValid && valueIsTouched;

    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
    }
    
    const valueBlurHandler=()=>{
        setValueIsTouched(true);
    }
    const reset = () => {
        setEnteredValue('');
        setValueIsTouched(false);
      };
    return{
        enteredValue,
        valueIsTouched,
        valueIsValid,
        valueIsInvalid,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    }
}

export default useInput;