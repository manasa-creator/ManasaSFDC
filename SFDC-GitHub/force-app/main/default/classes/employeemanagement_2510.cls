public with sharing class employeemanagement_2510   {

    @AuraEnabled(Cacheable = true)
    public static list<Employee__c> retriveEmp(String strEmpName, string strLocation) {
        strEmpName = '%' + strEmpName + '%';
        strLocation = '%' + strLocation + '%';
        list<Employee__c> lstAccs = [SELECT  Id, Name, Basic_salary__c, Employee_Location__c From Employee__c 
                                    WHERE Name LIKE :strEmpName AND Employee_Location__c LIKE :strLocation];

        if(lstAccs.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return lstAccs; 
    }
}