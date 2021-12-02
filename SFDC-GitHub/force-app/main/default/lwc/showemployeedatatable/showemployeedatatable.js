import { LightningElement,wire,api } from 'lwc';

        import getEmployeesList from '@salesforce/apex/showemployeedt.getEmployeesList';

        const columns = [
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'Basic_salary__c', fieldName: 'Basic_Salary__c', type: 'text'},    
            {label: 'HRA', fieldName: 'HRA__c', type: 'text'},
            {label: 'DA', fieldName: 'DA__c', type: 'text'},
            {label: 'TA', fieldName: 'TA__c', type: 'text'},
            {label: 'DepartmentName', fieldName: 'Department_Name__c', type: 'text'}
        ];
        export default class Showemployeedatatable extends LightningElement {
            tablecolumns = columns; 
            @api recordId;

            @wire(getEmployeesList, {depId:'$recordId'}) employee;
            
           
        
        }