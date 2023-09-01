import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-model-generator',
  templateUrl: './model-generator.component.html',
  styleUrls: ['./model-generator.component.scss']
})
export class ModelGeneratorComponent {

  myFormGroup: FormGroup = this.fb.group({
    customInput: ['']
  });

  value: any;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myFormGroup.get('customInput')?.valueChanges.subscribe(value => {
      this.value = value
    })
  }
}
