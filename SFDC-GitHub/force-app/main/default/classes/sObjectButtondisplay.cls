public with sharing class sObjectButtondisplay 
{
    public sObjectButtondisplay() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [select id,name,Phone from Account  limit 10];
    }
}