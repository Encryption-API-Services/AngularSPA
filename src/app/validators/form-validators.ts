import { AbstractControl } from '@angular/forms';




export function passwordValidator(control: AbstractControl) {
    var regex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    if (!regex.test(control.value)) {
        return { passwordValidator: {valid: false} };
    } 
    return null;
}

export function phoneNumberValidator(control: AbstractControl) {
    var regex: RegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    if (!regex.test(control.value)) {
        return {phoneNumberValidator: {valid: false}};
    }
    return null;
}