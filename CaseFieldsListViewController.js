({
    Search: function(component, event, helper) {
        helper.SearchCase(component, event); 
    },
    activeButton : function(component, event, helper){
        let inputText = component.find("searchField").get("v.value");
        if(inputText != null){
            component.set('v.isButtonActive',false);
        }       
    },
        handleNext : function(component, event, helper) { 
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber+1);
        helper.SearchCase(component, event); //not work 
        },
     handlePrev : function(component, event, helper) {        
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber-1);
         helper.SearchCase(component, event);
    },
    
})
