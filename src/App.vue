<script setup>
import PageHeader from '@/components/PageHeader.vue'
import PageContent from '@/components/PageContent.vue'
import {ref} from "vue"
const search = ref('')
function setSearch(val){
  search.value = val
}
</script>

<template>
  <page-header @set-search="setSearch"/>
  <page-content :search="search"/>
</template>

