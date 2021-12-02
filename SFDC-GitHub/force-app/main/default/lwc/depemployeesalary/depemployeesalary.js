import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class depemployeesalary extends NavigationMixin(LightningElement) {
    @api recordId;

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Employee Creation",
            message: "Employee is Successfully Created!",
            variant: "success"
        });
       this.dispatchEvent(evt);  
       this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: this.recordId,
            objectApiName: 'Department__c',
            actionName: 'view'
        },
       });  
    }

     handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Department_Name__c = this.recordId;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

       handleCancel(){
            this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
            recordId: this.recordId,
            objectApiName: 'Department__c',
            actionName: 'View'
            },   
        });
        this.dispatchEvent(evt);  
        eval("$A.get('e.force:refreshView').fire();");
        
     }

}