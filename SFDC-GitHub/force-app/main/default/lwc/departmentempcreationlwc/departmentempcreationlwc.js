import { LightningElement, track,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createEmployee from '@salesforce/apex/departmentempcreation.createEmployee';
import Emp_Name from '@salesforce/schema/Employee__c.Name';
import Emp_BasicSalary from '@salesforce/schema/Employee__c.Basic_salary__c';
import Emp_HRA from '@salesforce/schema/Employee__c.HRA__c';
import Emp_DA from '@salesforce/schema/Employee__c.DA__c';
import Emp_TA from '@salesforce/schema/Employee__c.TA__c';
import Emp_DepartmentName from '@salesforce/schema/Employee__c.Department_Name__c';
import { NavigationMixin } from 'lightning/navigation';


export default class Departmentempcreationlwc extends NavigationMixin(LightningElement) {
   @api recordId;  
   @track employeeId;
   @track error;
   @track employeeRecord = {
      [Emp_Name.fieldApiName]: '',
      [Emp_BasicSalary.fieldApiName]: '',
      [Emp_HRA.fieldApiName]: '',
      [Emp_DA.fieldApiName]: '',
      [Emp_TA.fieldApiName]: '',
      [Emp_DepartmentName.fieldApiName]:this.recordId,
   };


   handleNameChange(event) {
      this.employeeRecord[Emp_Name.fieldApiName] = event.target.value;
   }
   handleBasicSalChange(event) {
      this.employeeRecord[Emp_BasicSalary.fieldApiName] = event.target.value;
   }
   handleHraChange(event) {
      this.employeeRecord[Emp_HRA.fieldApiName] = event.target.value;
   }
   handleDaChange(event) {
      this.employeeRecord[Emp_DA.fieldApiName] = event.target.value;
   }
   handleTaChange(event) {
      this.employeeRecord[Emp_TA.fieldApiName] = event.target.value;
   }
   handleDepartmentNameChange(event){
     this.employeeRecord[Emp_DepartmentName.fieldApiName] = this.recordId;
  }

   handleChange(event) {
      if (event.target.name == 'empName') {
         this.employeeRecord[Emp_Name.fieldApiName] = event.target.value;
      }
      else if (event.target.name == 'empbasicsalary') {
         this.employeeRecord[Emp_BasicSalary.fieldApiName] = event.target.value;
      }
      else if (event.target.name == 'emphra') {
         this.employeeRecord[Emp_HRA.fieldApiName] = event.target.value;
      }
      else if (event.target.name == 'empda') {
         this.employeeRecord[Emp_DA.fieldApiName] = event.target.value;
      }
      else if (event.target.name == 'empta') {
         this.employeeRecord[Emp_TA.fieldApiName] = event.target.value;
      }
      /*else if (event.target.name == 'Emp_DepartmentName') {
         this.employeeRecord[Emp_DepartmentName.fieldApiName] = this.recordId;
      }*/
      console.log('employeeRecord++65:::' + JSON.stringify(this.employeeRecord));
   }

   createEmployeeRecord() {
      console.log('employeeRecord:::' + this.employeeRecord);
      console.log('employeeRecord++69:::' + JSON.stringify(this.employeeRecord));
       this.employeeRecord[Emp_DepartmentName.fieldApiName] = this.recordId;
      createEmployee({employeeRecObj:this.employeeRecord})
         .then(result => {
            this.employeeRecord = {};
            const toastEvent = new ShowToastEvent({
               title: 'Success!',
               message: 'Employee Created Successfully!!',
               variant: 'success'
            });
            this.dispatchEvent(toastEvent);
            this[NavigationMixin.Navigate]({
               type: 'standard__recordPage',
               attributes: {
                   recordId: this.recordId,
                   objectApiName: 'Department__c',
                   actionName: 'view'
               },
              });
              eval("$A.get('e.force:refreshView').fire();");
         })
         .catch(error => {
            this.error = error.message;
         });
        

   }
}