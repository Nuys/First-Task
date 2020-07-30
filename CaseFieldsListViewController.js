({
    Search: function(component, event, helper) {
       
       var searchText = component.get('v.searchKeyWord');
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
    },
   
})
