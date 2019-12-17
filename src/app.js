
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates: {},
      currency: [],
      amount: 0,
      conversion: 0
    },
    mounted(){
      this.fetchCurrency()
    },
    computed: {
      allCurrencies: function(){
        return this.currency.reduce((runningTotal, account) => {
          return runningTotal + account.currency;
        }, 0);
      }

    },
    methods: {
      fetchCurrency: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates);
      }
    }

  })
})
