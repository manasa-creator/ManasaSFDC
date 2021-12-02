import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class Contactloadapi extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD,PHONE_FIELD,EMAIL_FIELD] })
    record;
    get nameValue() {
        return this.record.data ? getFieldValue(this.record.data, NAME_FIELD) : '';
    }
    get phoneValue() {
        return this.record.data ? getFieldValue(this.record.data, PHONE_FIELD) : '';
    }
    get emailValue() {
        return this.record.data ? getFieldValue(this.record.data, EMAIL_FIELD) : '';
    }
}