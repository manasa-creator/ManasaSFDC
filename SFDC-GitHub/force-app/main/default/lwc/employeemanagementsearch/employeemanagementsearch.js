import { LightningElement, track } from 'lwc';
import retriveEmp from '@salesforce/apex/employeemanagement_2510.retriveEmp';

const columns = [
    { label: 'Name',fieldName: 'Name',type: 'url',typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}},
    { label: 'Basic_Salary',fieldName: 'Basic_salary__c',type: 'text'}, 
    { label: 'Emp_Location',fieldName: 'Employee_Location__c',type: 'text',}, 
    { label: 'HRA',fieldName: 'HRA__c',type: 'text',}, 
    { label: 'Gross_salary',fieldName: 'Gross_salary__c',type: 'text',}, 
];
export default class employeemanagementsearch extends LightningElement {
    @track searchData;
    @track columns = columns;
    @track errorMsg = '';
    strSearchEmpName = '';
    strSearchLocation = '';
    

    handleEmployeeName(event) {
        this.strSearchEmpName = event.detail.value;
    }
    handleEmpLocation(event) {
        this.strSearchLocation = event.detail.value;
    }

    handleSearch() {
        if(!this.strSearchEmpName) {
            this.errorMsg = 'Please enter Employee name or Location to search.';
            this.searchData = undefined;
            return;
        }

        retriveEmp({strEmpName : this.strSearchEmpName, strLocation : this.strSearchLocation})
        .then(result => {

            this.searchData = result;
            
        })
        .catch(error => {
            this.searchData = undefined;
            window.console.log('error =====> '+JSON.stringify(error));
            if(error) {
                this.errorMsg = error.body.message;
            }
        }) 
    }

}