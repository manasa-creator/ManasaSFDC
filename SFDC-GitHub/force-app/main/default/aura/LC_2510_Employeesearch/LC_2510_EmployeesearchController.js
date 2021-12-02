({
	searchme : function(component, event, helper) 
    {
        var mycol = [
            			{label:"Employee Name" , fieldName:"Name"},
            			{label:"Employee Location" , fieldName:"Employee_location", type:"text"},
                       
        			];
            component.set("v.col", mycol);
        var st = component.get("v.emplocation");
            
		var action = component.get("c.getmyemp");
            action.setParams({"emplocation" : el});
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state=='SUCCESS')
            {
              var myres = response.getReturnValue();  
              component.set("v.emp",myres);
            }
            
        });
        $A.enqueueAction(action);
	}

})