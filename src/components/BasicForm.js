import React from 'react';
import useInput from '../hooks/use-Input';

const isEmail = val => val.trim().length !== 0 && val.includes('@');
const isNotEmpty = val => val.trim().length !== 0;

const BasicForm = () => {



    const { enteredValue: firstName,
        valueIsValid: firstNameIsValid,
        valueIsInvalid: firstNameInputIsInvalid,
        valueChangeHandler: firstNameChangeHandler,
        valueBlurHandler: firstNameBlurHandler,
        reset: firstNameReset } = useInput(isNotEmpty);

    const { enteredValue: lastName,
        valueIsValid: lastNameIsValid,
        valueIsInvalid: lastNameInputIsInvalid,
        valueChangeHandler: lastNameChangeHandler,
        valueBlurHandler: lastNameBlurHandler,
        reset: lastNameReset } = useInput(isNotEmpty);

        const { enteredValue: email,
            valueIsValid: emailIsValid,
            valueIsInvalid: emailInputIsInvalid,
            valueChangeHandler: emailChangeHandler,
            valueBlurHandler: emailBlurHandler,
            reset: emailReset } = useInput(isEmail);
    



    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }


    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Submitted!');
        console.log(firstName, lastName, email);
        if (!formIsValid) {
            return;
        }

        firstNameReset();
        lastNameReset();
        emailReset();
    }


    const firstNameInputClasses = firstNameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={firstNameInputClasses}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstName} />
                {firstNameInputIsInvalid && <p className='error-text'>Please Enter your first Name.</p>}
            </div>
            <div className={lastNameInputClasses}>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastName} />
                {lastNameInputIsInvalid && <p className='error-text'>Please Enter your Last Name.</p>}
            </div>
            <div className={firstNameInputClasses}>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email} />
                {emailInputIsInvalid && <p className='error-text'>Please Enter your Email.</p>}
            </div>
            <div className='button'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default BasicForm;