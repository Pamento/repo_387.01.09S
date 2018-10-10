import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

export function CompareValidator(controlNameToCompar: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value === null || c.value.length === 0 ) {
      return null;
    }
    const controlToCompar = c.root.get(controlNameToCompar);
    if (controlToCompar) {
      const subscription: Subscription = controlToCompar.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompar && controlToCompar.value !== c.value ? { 'appCompare': true } : null;
  };
}

@Directive({
  selector: '[appCompare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ComparValidatorDirective, multi: true }]
})
export class ComparValidatorDirective implements Validator {
  @Input('appCompare') controlNameToCompar: string;

  validate(c: AbstractControl): ValidationErrors | null {
    return CompareValidator(this.controlNameToCompar)(c);
  }

}
