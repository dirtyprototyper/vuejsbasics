<!--api for rates -->
<!-- https://freecurrencyapi.net/documentation -->

<template>
  <div>rates</div>
  {{ cm.rates }}
  <br />
  <br />
  <li v-for="(item, index) in cm.rates" :key="index">
    {{ index }} :{{ item }}
  </li>

  <v-btn disabled @click="refresh">click to refresh</v-btn>
  <v-btn @click="logging">click to log</v-btn>
</template>

<script>
const axios = require("axios");
import { store } from "../../store/store.js";
import { mapState } from "vuex";

export default {
  name: "Displayrates",
  computed: {
    ...mapState({
      cm: (state) => state.cm,
    }),

    // rates: {
    //   get() {
    //     return store.state.rates;
    //   },
    //   set(val) {
    //     store.commit("saverates", val);
    //   },
    // },
  },
  methods: {
    logging() {
      //   console.log(this.wow.data);
      // store.commit("saverates", this.wow.data);
      //   console.log(this.wow.data.SGD);
      console.log(store.state.rates);
    },
    async refresh() {
      console.log("refresh");

      let rate = await axios
        .get(
          "https://freecurrencyapi.net/api/v2/latest?apikey=56e00fa0-510c-11ec-ba5d-bbfae717a339&base_currency=USD"
        )
        .then(
          (response) => console.log(response.data.data)
          //alternatively set ur data
        )
        .catch((error) => console.log(error));

      console.log(rate);
      //   await theapis.returnrates();
    },
  },

  mounted() {},
};
</script>

<!-- sample json from api
{"query":{"apikey":"56e00fa0-510c-11ec-ba5d-bbfae717a339","base_currency":"USD","timestamp":1638188835},"data":{"JPY":113.47131,"CNY":6.38594,"CHF":0.92385,"CAD":1.27359,"MXN":21.87394,"INR":75.00896,"BRL":5.60738,"RUB":74.98237,"KRW":1185.52858,"IDR":14320.37331,"TRY":12.7602,"SAR":3.75138,"SEK":9.13185,"NGN":409.64884,"PLN":4.16315,"ARS":100.75183,"NOK":9.0626,"TWD":27.79255,"IRR":42000.67142,"AED":3.67277,"COP":4001.29442,"THB":33.65042,"ZAR":16.14069,"DKK":6.58604,"MYR":4.23607,"SGD":1.36794,"ILS":3.15749,"HKD":7.79949,"EGP":15.74005,"PHP":50.3265,"CLP":831.92215,"PKR":175.7535,"IQD":1458.0305,"DZD":138.67217,"KZT":437.33706,"QAR":3.66255,"CZK":22.74694,"PEN":4.03798,"RON":4.37966,"VND":22690.64266,"BDT":85.79236,"HUF":326.44517,"UAH":27.21045,"AOA":586.00803,"MAD":9.24512,"OMR":0.38501,"CUC":24.00054,"BYR":3.00009,"AZN":1.69303,"LKR":201.00316,"SDG":436.35828,"SYP":2511.06134,"MMK":1782.03594,"DOP":56.48092,"UZS":10755.232,"KES":112.40307,"GTQ":7.72413,"URY":44.05053,"HRV":6.66657,"MOP":8.03413,"ETB":47.84808,"CRC":626.00688,"TZS":2297.06699,"TMT":3.49005,"TND":2.87457,"PAB":1.00003,"LBP":1505.73519,"RSD":104.00209,"LYD":4.6039,"GHS":6.03012,"YER":250.00488,"BOB":6.82011,"BHD":0.37691,"CDF":1995.85374,"PYG":6824.06836,"UGX":3560.09835,"SVC":8.74962,"TTD":6.74909,"AFN":96.11219,"NPR":120.16297,"HNL":24.07331,"BIH":1.73413,"BND":1.36763,"ISK":130.00208,"KHR":4057.05422,"GEL":3.06304,"MZN":63.20067,"BWP":11.79964,"PGK":3.50808,"JMD":154.40267,"XAF":580.81307,"NAD":16.13036,"ALL":106.70266,"SSP":406.127,"MUR":43.35124,"MNT":2840.05579,"NIO":35.21048,"LAK":10829.19209,"MKD":54.4607,"AMD":481.50686,"MGA":3965.06755,"XPF":105.53247,"TJS":11.29013,"HTG":97.89281,"BSD":1.00001,"MDL":17.67043,"RWF":1021.31043,"KGS":84.77182,"GNF":9329.09508,"SRD":21.43127,"SLL":11006.28575,"XOF":587.04654,"MWK":808.34235,"FJD":2.12373,"ERN":15.00032,"SZL":16.14393,"GYD":208.09605,"BIF":1983.95357,"KYD":0.82501,"MVR":15.42035,"LSL":16.12034,"LRD":141.20204,"CVE":97.62174,"DJF":177.50183,"SCR":13.49484,"SOS":575.01213,"GMD":52.40123,"KMF":435.76668,"STD":21.72039,"XRP":1.02002,"AUD":1.39912,"BGN":1.73163,"BTC":0.0174,"JOD":0.70802,"GBP":0.74931,"ETH":0.00023,"EUR":0.88552,"LTC":0.01,"NZD":1.46383}}
 
-->
