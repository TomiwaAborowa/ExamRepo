<script setup>
import { useRouter } from 'vue-router';
import InfoRep from '../components/InfoRep.vue'

const route = useRouter();
const name = route.currentRoute.value.params.repoName;


</script>
<template>
    <InfoRep :name="name" />
</template>
<style scope></style>