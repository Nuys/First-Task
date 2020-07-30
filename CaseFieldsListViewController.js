({
    Search: function(component, event, helper) {
       let button = event.getSource();
      
   		 button.set('v.disabled',true);
       var searchText = component.get('v.searchKeyWord');
        if(searchText.trim() == 0){
            button.set('v.disabled',true);
        }else{
        var typefield = component.get('v.pickList');
         console.log(typefield);
         var action = component.get('c.fetchCase');
        action.setParams({searchKeyWord:searchText, typeField: typefield} );
        action.setCallback(this, function(response) {
            var state = response.getState();
            var cases;
            var labels;
            if (state === 'SUCCESS') {
                cases = response.getReturnValue().objects;
                labels = response.getReturnValue().listOfMaps;
                cases.forEach(function(field){
                    field.CaseLink = '/' + field.Id;
                    });
            }
            component.set("v.data", cases);
            component.set('v.mycolumns', labels);
            
        });
        
        $A.enqueueAction(action);
        }
    },
      activeButton : function(component, event, helper){
        let inputText = component.find("searchField").get("v.value");
        if(inputText != null){
            component.set('v.isButtonActive',false);
        }       
    },
})
