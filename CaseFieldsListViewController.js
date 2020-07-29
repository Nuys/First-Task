({
    Search: function(component, event, helper) {
       var searchText = component.get('v.searchKeyWord');
        var typefield = component.get('v.pickList');
         var action = component.get('c.fetchCase');
        action.setParams({searchKeyWord:searchText, typeField: typefield} );
        action.setCallback(this, function(response) {
            var state = response.getState();
            var cases;
            var labels;
            if (state === 'SUCCESS') {
                cases = response.getReturnValue().objects;
                labels = response.getReturnValue().labels;
                console.log(cases);
            }
            component.set("v.data", cases);
            if(typefield !== 'CaseNumber'){
            component.set('v.mycolumns',[                
                {label: 'Case Number', fieldName: 'CaseNumber', type: 'text'},
                {label: labels[typefield], fieldName: typefield, type: 'text'}] )
                }
            else{
                component.set('v.mycolumns',[                
                {label: 'Case Number', fieldName: 'CaseNumber', type: 'text'}])
            }
        });
        
        $A.enqueueAction(action);
    }
})
