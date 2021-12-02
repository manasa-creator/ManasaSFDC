trigger AccountActionsHandlerTrigger on Account (after insert,after update) {
    
        AccountActionsHandler.createContacts(trigger.new);
   }