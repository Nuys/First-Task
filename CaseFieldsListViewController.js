({
    Search: function(component, event, helper) {
        helper.SearchCase(component, event);   
        helper.countPages(component, event);
        var disableButtonNext = component.get("v.countPages");
        console.log(disableButtonNext);
        if(disableButtonNext == 0){
            component.set('v.isLastPage', true);
        }
        
    },
    activeButton : function(component, event, helper){
       
        
        var validIsInputBlank = component.get("v.searchKeyWord");
      
        if(!validIsInputBlank.trim()){
         
            component.set('v.isLastPage',true);
            component.set('v.pageNumber', 1);
            
        }else{
             component.set('v.isLastPage',false);
           
        }     
    },
    handleNext : function(component, event, helper) { 
        var allPages = component.get("v.countPages");
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
