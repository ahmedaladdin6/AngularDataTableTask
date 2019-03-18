import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../service/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public contactForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private dialogRef: MatDialogRef<ContactComponent>,
    private contactservice:ContactService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

onNoClick():void{
this.dialogRef.close();
}

  ngOnInit() {
    this.contactForm =this.formBuilder.group({
      ID:[this.data.ID],
      FirstName:[this.data.FirstName,[Validators.required]],
      LastName:[this.data.LastName,[Validators.required]],
      Contact:[this.data.Contact,[Validators.required]],
      Email:[this.data.Email,[Validators.required]],
    });
  }
  onSubmit(){
    if(isNaN(this.data.ID)){
      this.contactservice.addContact(this.contactForm.value);
      this.dialogRef.close();
    }
    else{
      this.contactservice.editContact(this.contactForm.value);
      this.dialogRef.close();
    }
    
  }
  

}
