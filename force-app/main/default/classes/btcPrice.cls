public with sharing class btcPrice {
    @AuraEnabled(cacheable = true)
    public static String getBTCPrice() {
        string url = 'https://blockchain.info/tobtc?currency=USD&value=1';
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(url);
        req.setMethod('GET');

        HttpResponse res = h.send(req);
        String BTCprice = (string)(res.getBody());
        return BTCprice;
    }
}