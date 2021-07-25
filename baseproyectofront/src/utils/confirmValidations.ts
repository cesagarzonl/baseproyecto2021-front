import { FormGroup } from '@angular/forms';

    

export function ConfirmedValidator(controlName: string, matchingControlName: string){

    return (formGroup: FormGroup) => {

        const control = formGroup.controls[controlName];

        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {

            return;

        }
        console.log('control.value !== matchingControl.value',control.value,matchingControl.value)
        if (control.value !== matchingControl.value) {
            console.log('Error match')
            matchingControl.setErrors({ confirmedValidator: true });

        } else {
            console.log('ok')
            matchingControl.setErrors(null);

        }

    }

}