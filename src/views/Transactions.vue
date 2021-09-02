<template>
  <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
  >
    <template v-slot:item.type="{ item }">
      <v-chip
          :color="getColor(item.type)"
          dark
      >
        {{ item.type }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<style>
.text-start {
  text-align: center !important;
}
</style>

<script>
import currencyFormatter from 'currency-formatter'

export default {
  data() {
    return {
      AllSeries: [],
      headers: [
        {
          text: 'ردیف',
          align: 'start',
          sortable: false,
          value: 'no',
        },
        {text: 'تاریخ درخواست', value: 'requestDate'},
        {text: 'تاریخ پرداخت', value: 'paymentDate'},
        {text: 'مبلغ', value: 'amount'},
        {text: 'نوع', value: 'type'},
      ],
      desserts: [
        {
          no: 1,
          requestDate: '1400-09-01',
          paymentDate: '1400-09-03',
          amount: 9500000,
          type: 'برداشت',
        },
        {
          no: 2,
          requestDate: '1400-05-01',
          paymentDate: '1400-05-03',
          amount: 1250000,
          type: 'برداشت',
        },
        {
          no: 3,
          requestDate: '1400-01-29',
          paymentDate: '1400-01-30',
          amount: currencyFormatter.format(500000000, {
            symbol: 'ریال',
            thousand: ',',
            precision: 0,
            format: '%v %s' // %s is the symbol and %v is the value
          }),
          type: 'برداشت',
        },
        {
          no: 4,
          requestDate: '1400-03-31',
          paymentDate: '1400-04-02',
          amount: 160000000,
          type: 'برداشت',
        },
        {
          no: 5,
          requestDate: '1399-09-16',
          paymentDate: '1399-09-16',
          amount: 150000000,
          type: 'واریز',
        },
        {
          no: 6,
          requestDate: '1400-06-06',
          paymentDate: '1400-06-08',
          amount: 15000000,
          type: 'برداشت',
        },
        {
          no: 7,
          requestDate: '1400-04-08',
          paymentDate: '1400-04-13',
          amount: 14500000,
          type: 'برداشت',
        },

      ],
    }
  },
  methods: {
    getColor(type) {
      if (type === 'واریز') return 'green'
      else return 'red'
    },
    putDate() {
      for (let i = 0; i < 10; i++) {
        this.AllSeries = {
          no: i,
          requestDate: '1400-01-29',
          paymentDate: '1400-01-30',
          amount: currencyFormatter.format(Math.floor((Math.random() * 10) + 1), {
            symbol: 'ریال',
            thousand: ',',
            precision: 0,
            format: '%v %s' // %s is the symbol and %v is the value
          }),
          type: 'برداشت',
        }
      }
    }
  },
}
</script>