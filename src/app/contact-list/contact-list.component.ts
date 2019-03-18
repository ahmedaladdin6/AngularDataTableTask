import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactService } from '../service/contact.service';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
ispopupOpended =false;
asd;
flag :boolean=false;
selectedContact=[];
  constructor(
     private dialog?:MatDialog,
     private contactService?:ContactService
    ) { }

  ngOnInit() {
  }
  get ContactList(){
    return this.contactService.getAllContacts();
  }
  addContact(){
  this.ispopupOpended=true;
   const dialogRef = this.dialog.open(ContactComponent,{
     data:{}
   });
}
editContact(id:number){
  this.ispopupOpended =true;
  const contact = this.contactService.getAllContacts().find(c=> c.ID === id);
  const dialogRef = this.dialog.open(ContactComponent,{
    data:contact
  })
}

deleteContact(id:number){
  this.contactService.deleteContact(id);
}

deleteSelected(x){
x =  this.asd;
 
  for( let i =0; i < this.selectedContact.length ;i++){
    this.contactService.deleteContact(x);
  }
}

isSelectedContact(id:number){
  
this.selectedContact.push(id);
for( let i =0; i < this.selectedContact.length ;i++){
  console.log('asd'+this.selectedContact[i]);
 this.asd  =this.selectedContact[i];

}
}


toggleEditable (event)  {
  if ( event.target.checked ==true ) {
      // this.flag=true;
      alert('done');
 }
}


}
