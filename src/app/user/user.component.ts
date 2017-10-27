import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  a: number = 0;
  b: number = 7;
  public formGroup: FormGroup;
  public data: any;
  
  constructor(private formBuilder: FormBuilder) {

    // this.formGroup = formBuilder.group({
    //   'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    //   'email': ['', Validators.compose([Validators.required, Validators.email])]
    // })

   }

  ngOnInit() {
  }

  public sendForm() {

    let name: string = this.formGroup.get('name').value;
    let email: string = this.formGroup.get('email').value;
    
    this.data.name 
    this.data.email


    console.group();
    console.log(name);
    console.log(email);

    
  

  }
}
