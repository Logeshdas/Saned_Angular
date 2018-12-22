import { Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector:'[passvalidator]',
    providers :[{
        provide : NG_VALIDATORS,
        useExisting:confirmvalidatorDirective,
        multi:true
    }]
})
export class confirmvalidatorDirective implements Validator{

   @Input() passvalidator:string;
    validate(control:AbstractControl):{[key:string]:any} |null {

        const controlToCompare = control.parent.get(this.passvalidator);
        if(controlToCompare && controlToCompare.value !== control.value){
            return {'notequal':true};
        }
        return null;
    }

}