public class RetrieveAccountDetails {
    @AuraEnabled
    public static list<Account> getRelatedList()
    {
        List<Account> Acclist = [Select id,name,OwnerId,Phone,Website,AnnualRevenue from Account where Industry =: 'Financial Services'];
        system.debug(Acclist);
        return Acclist;
        
    }


}