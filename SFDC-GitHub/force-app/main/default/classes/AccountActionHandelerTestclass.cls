@isTest
public class AccountActionHandelerTestclass {
  
  Private static TestMethod void contacttestCreate()
  {
      Account actObj = new Account();
        actObj.Name = 'SKE';
        actObj.Industry = 'Engineering';
        actObj.Type = 'Other';
        Test.startTest();
            insert actObj;
      Test.stopTest();
        Contact contObj = [select id,name from Contact where accountId=:actObj.Id];
        System.assert(contObj.Id!=null);
	}
  }