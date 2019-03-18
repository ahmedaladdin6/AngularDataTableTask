import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 contactList :Contact[] =[];
  constructor() { }

  addContact(contact: Contact){
    contact.ID =this.contactList.length +1;
    this.contactList.push(contact);
    console.log(contact.ID)
  }
removeContact(id:number){
  const contact =this.contactList.findIndex(c=>c.ID === id);
  this.contactList.splice(contact,1);
}
editContact(contact:Contact)
{
  const index = this.contactList.findIndex(c=>c.ID === contact.ID);
  this.contactList[index] =contact;
}
deleteContact(id:number){
  const contact = this.contactList.findIndex(c=>c.ID === id)
  this.contactList.splice(contact,1)
}
getAllContacts(){
  return this.contactList;
}

}
