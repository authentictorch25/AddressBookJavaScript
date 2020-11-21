
class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

get firstName() { return this._firstName; }
    set firstName(firstName) {
        let pattern = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (pattern.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw 'Invalid First Name';
        }
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let pattern = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (pattern.test(lastName)) {
            this._lastName = lastName;
        } else {
            throw 'Invalid Last Name';
        }
    }

    get address() { return this._address; }
    set address(address) {
        let pattern = RegExp('^[A-Za-z0-9]{4,}$');
        if (pattern.test(address)) {
            this._address = address;
        } else {
            throw 'Invalid Address';
        }
    }

    get city() { return this._city; }
    set city(city) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if (pattern.test(city)) {
            this._city = city;
        } else {
            throw 'Invalid City';
        }
    }

    get state() { return this._state; }
    set state(state) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if (pattern.test(state)) {
            this._state = state;
        } else {
            throw 'Invalid State';
        }
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let pattern = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if (pattern.test(zip)) {
            this._zip = zip;
        }
        else {
            throw 'Invalid Zip Code';
        }
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let pattern = RegExp('^[1-9][0-9]{9}$');
        if (pattern.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw 'Invalid Phone Number';
        }
    }

    get email() { return this._email; }
    set email(email) {
        let pattern = RegExp('^[a-zA-Z0-9]+([.+-]{1}[A-Za-z0-9]+)*[@][a-zA-Z0-9]+([.]{1}([a-zA-Z]{2}|[a-zA-Z]{3,})){0,2}$');
        if (pattern.test(email)) {
            this._email = email;
        }
        else {
            throw 'Invalid email-id';
        }
    }
}
let contactarray = new Array();
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
    contactarray.push(contact);
}
try {
    AddContact('Akash', 'Singh', 'Mumbai', 'Shimla', 'Himachal', '489568', '9288009922', 'akash@gmail.com');
    AddContact('Namrata', 'Yadav', 'Delhi', 'Bangalore', 'Delhi', '456987', '8887776665', 'namrata@gmail.com');
} catch (exception) {
    console.error(exception);
}



function GetIndexByName(firstName, lastName) {
    for (let i = 0; i < contactarray.length; i++) {
        if (contactarray[i]._firstName == firstName && contactarray[i]._lastName == lastName) {
            return i;
        }
    }
    return -1;
}
let indexOfContact = GetIndexByName('Akash', 'Singh');
if (indexOfContact != -1) {
    contactarray[indexOfContact].firstName = 'Akash';
    contactarray[indexOfContact].lastName = 'Pratap';
}

console.log(contactarray);
//////

try {
    AddContact('Sukanya', 'Singh', 'VindhyaNagar', 'Singrauli', 'MadhyaPradesh', '486886', '9288009922', 'sukanya@gmail.com');
} catch (e) {
    console.error(e);
}
function DeleteContact(firstName,lastName){
    contactarray = contactarray.filter(obj=>obj.firstName!=firstName && obj.lastName!=lastName);
}

console.log('Added Sukanaya in contact array');
console.log(contactarray);
console.log('After deletion process')
DeleteContact('Sukanya','Singh');
console.log('contactarray after delete ');
console.log(contactarray);
///////
let countOfContact = contactarray.reduce((countOfContact, contact) => countOfContact += 1, 0);
console.log("Number of contacts: " + countOfContact);