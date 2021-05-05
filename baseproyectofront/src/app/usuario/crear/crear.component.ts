import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  ngOnInit(): void {
  }
  /*updateName() {
    this.name.setValue('Nancy');
  }*/
  usaurioForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
    usuario: ['',Validators.required],
    _id: [''],
    adicionales: this.fb.array([
      this.fb.control('')
    ]),
  });

  get adicionales() {
    return this.usaurioForm.get('adicionales') as FormArray;
  }

  /*addAlias() {
    this.adicionales.push(this.fb.control(''));
  }*/

  /*usaurioForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    usuario: new FormControl(''),
    _id: new FormControl(''),
  })*/

  onSubmit(){
    console.warn(this.usaurioForm.value);
  }
  constructor(private fb: FormBuilder) { }
}
