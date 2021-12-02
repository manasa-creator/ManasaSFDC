import { LightningElement } from 'lwc';

export default class DataBindingExample extends LightningElement {
    message='Welcome to Lightning web components world!';
handleChange(Event){
    this.message = Event.target.value;
}
}