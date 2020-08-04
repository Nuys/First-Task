({
    Search: function(component, event, helper) {
        helper.SearchCase(component, event);   
        helper.countPages(component, event);
       
        
    },
    activeButton : function(component, event, helper){
       
        
        var test = component.get("v.searchKeyWord");
        console.log(test.trim());
        if(!test.trim()){
         
            component.set('v.isLastPage',true);
            component.set('v.pageNumber', 1);
            
        }else{
             component.set('v.isLastPage',false);
           
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
