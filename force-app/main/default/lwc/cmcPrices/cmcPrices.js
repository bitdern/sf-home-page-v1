import { LightningElement, wire } from "lwc";
import getLivePrices from "@salesforce/apex/CryptoPriceController.getLivePrices";

const columns = [
  { label: "Name", fieldName: "name" },
  { label: "Symbol", fieldName: "symbol" },
  { label: "Price", fieldName: "price" },
  { label: "24h Change", fieldName: "percent_change_24h" }
];

// if the returned data is undefined, the component won't render any values.
// issue could be coming from coinPricesDefined or getLivePrices
export default class CmcPrices extends LightningElement {
  columns = columns;

  @wire(getLivePrices)
  coinPrices;

  // does this method need a parameter?
  get coinPricesDefined() {
    return this.coinPrices !== undefined && this.coinPrices.data !== undefined;
  }
}
