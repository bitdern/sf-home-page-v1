import { LightningElement, track } from "lwc";
import getContactList from "@salesforce/apex/btcPrice.getBTCPrice";

export default class ApexImperativeMethod extends LightningElement {
  @track BTCPrice;
  @track error;

  handleLoad() {
    getBTCPrice()
      .then((result) => {
        this.BTCPrice = result;
      })
      .catch((error) => {
        this.error = error;
      });
  }
}
