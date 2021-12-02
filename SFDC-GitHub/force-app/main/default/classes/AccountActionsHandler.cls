public with sharing class AccountActionsHandler {
    public static void createContacts(List<Account> accountsList){
        List<Contact> contactList = new List<Contact>();
        System.Debug('hi hello SFDX');
       for(Account actObj:accountsList){
             Contact contactObj = new Contact();
             contactObj.AccountId = actObj.Id;
             contactObj.LastName = actObj.Name;
             contactList.add(contactObj);
       }
       
       if(!contactList.isEmpty()){
               insert contactList;
               update contactList;
       }
       
   }
    }