import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 's-input',
  templateUrl: './input.component.html',
})
export class InputComponent {

  @Input() label?: string;
  @Input() control?: FormControl;
  @Input() width?: string = "w-auto";

  // custom theme
  @Input() inputType?: 'STATIC' | 'STANDARD' | 'OUTLINE' = 'STATIC';
  @Input() color?: string = "black";





  _field!: FormControl;
  @Input()
  public get field(): AbstractControl | null {
    return this._field
  }

  public set field(value: AbstractControl | null) {
    this._field = value as FormControl
  }


}
