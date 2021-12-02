({
	dosave : function(component, event, helper) {
		var action = component.get("c.createcontact");
        action.setparams({'contobj':component.get('v.contactobj')});
        action.setcallback(this,function(data){
            component.set('v.contactId',data.getReturnvalue())
        });
        $A.enqueueAction(action);
	}
})