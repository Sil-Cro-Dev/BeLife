import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent {

  @Input() label: string = 'label';
  @Input() options: string[] = [];

  value?: string;

  _field!: FormControl;
  @Input()
  public get field(): AbstractControl | null {
    return this._field
  }

  public set field(value: AbstractControl | null) {
    this._field = value as FormControl
  }


}
