import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() label: string = 'label';
  @Input() focusColor?: string;
  @Input() control?: FormControl;

  _field!: FormControl;
  @Input()
  public get field(): AbstractControl | null {
    return this._field
  }

  public set field(value: AbstractControl | null) {
    this._field = value as FormControl
  }

  ngOnInit(): void {
  }


}
