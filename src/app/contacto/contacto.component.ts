import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(private  contactService:  ContactService,) { }
  message:boolean=false;
  ngOnInit() {
  }

/*  register(form) {
    this.contactService.register(form.value).subscribe((res) => {
      alert(res.response);
      form.reset();
    });
  }*/


  contactMeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    contactNumber: new FormControl('', [
      Validators.maxLength(10),
      Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ])
  });


  public register() {
      console.log(this.contactMeForm.value);
    this.contactService.saveContactDetails(this.contactMeForm.value)
    .then(()=>{
       console.log("No hubo error");
       this.message=true;
    })
    .catch(err=>{
      console.error("No hubo error",err.message );
    })
    .finally(() => {
      this.contactMeForm.reset();
    });
  }



}
