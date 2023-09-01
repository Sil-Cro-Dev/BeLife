import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input() label: string = 'label';
  @Input() required = false;


  _field!: FormControl;
  @Input()
  public get field(): AbstractControl | null {
    return this._field
  }

  public set field(value: AbstractControl | null) {
    this._field = value as FormControl
  }


}
