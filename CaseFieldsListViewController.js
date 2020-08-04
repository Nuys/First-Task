({
    Search: function(component, event, helper) {
        helper.SearchCase(component, event);   
        helper.countPages(component, event);
    },
    handleKeyUp: function (component, event, helper) {
       
        var testButton = event.keyCode;
        console.log(testButton);
        if(testButton === 13){
             event.preventDefault();
            console.log(testButton);
            helper.SearchCase(component, event); 
            
            helper.countPages(component, event);
            
        }
        
    },
    activeButton : function(component, event, helper){
        
        
        var test = component.get("v.searchKeyWord");
        
        if(!test.trim()){
            
            component.set('v.isLastPage',true);
            component.set('v.pageNumber', 1);
            component.set('v.searchButton', true);
            
        }else{
            component.set('v.searchButton', false);
        }    
    },
    handleNext : function(component, event, helper) { 
        
        var isDisabled = component.find('nextButton'); 
        
        var countPages = component.get("v.countPages");
        var pageNumber = component.get("v.pageNumber");
        
        
        component.set("v.pageNumber", pageNumber+1);
        
        if(pageNumber + 1 == countPages ){
            component.set("v.isLastPage", true);
        }
        
        helper.SearchCase(component, event); 
        
    },
    handlePrev : function(component, event, helper) {  
        
        var countPages = component.get("v.countPages");
        var pageNumber = component.get("v.pageNumber");
        
        component.set("v.pageNumber", pageNumber-1);
        pageNumber = component.get("v.pageNumber");
        
        if(pageNumber < countPages ){
            component.set("v.isLastPage", false);
            
        }
        helper.SearchCase(component, event);
        
    }, 
    
    
    
    
    
})
