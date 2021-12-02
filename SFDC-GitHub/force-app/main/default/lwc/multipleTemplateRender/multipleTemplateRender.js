import { LightningElement } from 'lwc';
import templateOne from './template1.html';
import templateTwo from './template2.html';
export default class MultipleTemplateRender extends LightningElement {
    showTemplateOne=true; 
    render(){
        return this.showTemplateOne?templateOne:templateTwo;        
    }
    switchTemplate(){ 
        this.showTemplateOne = this.showTemplateOne === true ? false : true; 
    }  
}