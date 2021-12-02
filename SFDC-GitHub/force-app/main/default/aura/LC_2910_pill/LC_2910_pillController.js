({
	 onMultiSelectChange: function(component, event) {
        debugger;
        var selectedValue= event.getSource().get("v.value");
        var str_array = selectedValue.split(';');
        component.set("v.picklistOptsList", str_array); 
        console.log('you selected :'+selectedValue);
    }
})