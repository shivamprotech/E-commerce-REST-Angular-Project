import { AbstractControl } from '@angular/forms';

export function validateUserName(control: AbstractControl) {
    if (control.value.startsWith('developer')) {
        return {
            validUserName: true
        };
    }
    return null;
}