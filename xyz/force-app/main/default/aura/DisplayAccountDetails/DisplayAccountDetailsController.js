({
    onInit : function(component,event,helper)
    {
component.set("v.AccountList",[
            {
                label : 'Name',
                fieldName : 'Name',
                type : 'text',
                sortable : true
            },
            {
                label : 'Owner Name',
                fieldName : 'OwnerId',
                type : 'text',
                sortable : true
            }
           
        ]);
        // call helper function to fetch account data from apex
        //helper.getAccountData(component);
    },

 myAction : function(component, event, helper) 
    {
        var Acclist = component.get("c.getRelatedList");
        Acclist.setCallback(this, function(data) 
                           {
                               component.set("v.AccountList", data.getReturnValue());
                           });
        $A.enqueueAction(Acclist);
 }
})