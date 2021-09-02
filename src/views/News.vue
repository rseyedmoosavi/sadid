<template>
  <v-row>
      <v-col v-for="(item,i) in items" :key="i" cols="6">
        <card-news :date="item.date" :title="item.title" :intro="item.intro"></card-news>
      </v-col>
  </v-row>
</template>

<script>
import CardNews from '../components/news/CardNews'
export default {
  name: 'News',
  components: {'card-news': CardNews},
  data: () => ({
    selectedItem: 0,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    items: [
      {
        title: 'خبر مهم',
        intro: 'چه بسا انسان های زیادی می توانند',
        date: '28 شهریور 1400',
        image: ''
      },
      {
        title: 'خبر خیلی مهم',
        intro: 'تاریخچه اساسنامه شرکت در تاریخ 25 مهر سال 1325 نوشته شد ولی به خاطر زمان حال آن موقع نشد که بشه',
        date: '21 شهریور 1400',
        image: ''
      }
    ]
  })
}
</script>
<style>
#news {
  /*padding: 10px;*/
}
</style>