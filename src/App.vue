<template>
  <router-view></router-view>
</template>

<script>
import { useHead } from '@vueuse/head'
import { reactive, computed } from 'vue'

const siteData = reactive({
  title: 'Github Vue',
  description: 'A simple app which displays  users and their repos',
})
useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: 'description',
      content: computed(() => siteData.description), 
    },
  ],
})

export default {
  name: 'app',
  components: {

  },
  data() {
    return {


    }
  },



}
</script>

<style></style>