import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModelGeneratorService} from "../../service/model-generator.service";
import {ATTRIBUTE_TYPES} from "../../models/modelInput";

@Component({
  selector: 'app-model-generator',
  templateUrl: './model-generator.component.html',
  styleUrls: ['./model-generator.component.scss']
})
export class ModelGeneratorComponent {

  myFormGroup: FormGroup = this.fb.group({
    packageName: [''],
    className: [''],
  });

  attributes: FormGroup = this.fb.group({
    attributeName: [''],
    attributeType: ['']
  });

  value: { packageName: string, className: string } = {packageName: '', className: ''};
  attributeTypes = ATTRIBUTE_TYPES;


  constructor(private fb: FormBuilder,
              private modelGeneratorService: ModelGeneratorService) {
  }

  ngOnInit() {

    this.myFormGroup.get('packageName')?.valueChanges.subscribe(value => this.value!.packageName = value.replaceAll(" ", "").toLowerCase())
    this.myFormGroup.get('className')?.valueChanges.subscribe(value => this.value!.className = value)

  }

  addAttribute() {

  }


  generateModel() {

  }


  test() {
    this.modelGeneratorService.generateModel(
      {
        packageName: "com.example",
        className: "MyClass",
        attributes: {
          "STRING": ["attribute1", "attribute2"],
          "INT": ["attribute3"],
          "DOUBLE": ["attribute4"]
        },
        libraries: ["LOMBOK"]
      }
    ).subscribe();
  }

}
