({
     calculate : function(component, event, helper) {
         var fnumber = component.get("v.fnum");
         var fnumber = component.get("v.snum");
         var action =component.get("c.Calculatevalue");
         action.setparams({"firstnumber":fnumber,"secondnumber":snumber});
         action.setcallback(this,function(response)
         {
          var state=response.getState();
          var valuefromResp =response.getreturnvalue();
           if(state==="SUCCESS")
              {
              component.set("v.result",response.getreturnvalue());
              }
           });
           $A.enqueueAction(action);
	}
 
})