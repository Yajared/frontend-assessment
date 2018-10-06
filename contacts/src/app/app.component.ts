import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  itemType = 'Contact';
  contacts = [
    {
      "name": "James Butte",
      "phone": "504-845-1421",
      "email": "jbutte@gmail.com"
    },
    {
      "name": "Josephine Darakjy",
      "phone": "565-125-1242",
      "email": "josephined@gmail.com"
    },
    {
      "name": "John Smith",
      "phone": "204-845-1345",
      "email": "js@test.com"
    },
    {
      "name": "Bobby Colspan",
      "phone": "842-426-0915",
      "email": "colspan@hotmail.com"
    },
    {
      "name": "Linda Yutapon",
      "phone": "743-842-8933",
      "email": "lindayuta@yahoo.com"
    },
    {
      "name": "Hank Halloway",
      "phone": "922-892-3482",
      "email": "halloway@gmail.com"
    },
    {
      "name": "Sarah Johnson",
      "phone": "659-229-8027",
      "email": "sjohnson456@gmail.com"
    },
    {
      "name": "Larry Gaven",
      "phone": "592-198-3322",
      "email": "larry_gaven@hotmail.com"
    }
  ];
  static contactList : any[] = [];

  newName   : string;
  newPhone  : string;
  newEmail  : string;

  showNewNameError : boolean = false;
  showNewPhoneError : boolean = false;
  showNewEmailError : boolean = false;

  getContactList() {
      return AppComponent.contactList;
  }

  ngOnInit() {
      // pre-process data into an iterable to allow for display in templates
      this.contacts.forEach((element, index) => {
          element['id'] = index;
          AppComponent.contactList.push(element);
      });
  }

  onAdded(newName: string, newPhone: string, newEmail: string) {
      // Clear out any old validation values
      this.showNewNameError = false;
      this.showNewPhoneError = false;
      this.showNewEmailError = false;

      // Simple Validations
      if(newName == null || newName.trim().length === 0){
        this.showNewNameError = true;
      }
      if(newPhone == null || newPhone.trim().length === 0){
        this.showNewPhoneError = true;
      }
      if(newEmail == null || newEmail.trim().length === 0){
        this.showNewEmailError = true;
      }

      if(!this.showNewNameError && !this.showNewPhoneError && !this.showNewEmailError) {
          let newId = (new Date).getTime(); // generate a most-likely unique (barring race conditions) ID by simply using linux epoch in milliseconds

          let newContact = {
              id      : newId,
              name    : newName,
              phone   : newPhone,
              email   : newEmail
          };
          AppComponent.contactList.push(newContact);

          this.clearNewContactForm();
      }
  }

  clearNewContactForm() {
      this.newName = "";
      this.newPhone = "";
      this.newEmail = "";
  }

  onDeleted(id: number) {
      let newContactList : any[] = [];
      for(let contact of AppComponent.contactList) {
          if(contact.id != id){
              newContactList.push(contact);
          }
      }
      AppComponent.contactList = newContactList;
  }

}
