import { AbstractControl } from '@angular/forms';




export function passwordValidator(control: AbstractControl) {
    var regex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    if (!regex.test(control.value)) {
        console.log("Valid")
        return { passwordValidator: {valid: false} };
    } 
    return null;
}