public with sharing class departmentempcreation {
    public departmentempcreation() {

            }
            @AuraEnabled
            public static Employee__c createEmployee(Employee__c employeeRecObj){
                try{
                    insert employeeRecObj;
                    return employeeRecObj;
                }
                catch(Exception ex){
                    throw new AuraHandledException(ex.getMessage());
        
                }
                
            }
            
        
            
        }