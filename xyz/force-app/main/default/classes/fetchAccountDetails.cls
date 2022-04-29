public class fetchAccountDetails {
    @AuraEnabled

    public static list<Account> fetchAccountList(){

        return [select Id, name from Account limit 10];             

    }

}