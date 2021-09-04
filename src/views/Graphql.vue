<template>
  <div>
    <p v-for="item in allLinks.countries">{{item.name}}</p>
  </div>
</template>

<script>
import {ALL_LINKS_QUERY} from "../constants/graphql";

export default {
  data () {
    return {
      allLinks:'',
      loading: 0
    }
  },
  components: {},
  apollo: {
    allLinks: {
      query: ALL_LINKS_QUERY,
      loadingKey:'naa',
      update:data => data
    }
  }
}
</script>