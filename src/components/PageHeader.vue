<script setup>
import { ref, defineEmits } from "vue";
import TabMenu from "primevue/tabmenu";
import InputWrapper from "./InputWrapper.vue";
const emit = defineEmits(['set-search'])
const items = ref([
  { label: "Таблица", to: "/" },
  { label: "Карточки", to: "/cardview" },
]);

const active = ref(0);
function setSearch(val){  
  emit('set-search', val)
}

</script>

<template>
  <header>
    <TabMenu :model="items" v-model:activeIndex="active" />
    <InputWrapper @set-search="setSearch"/>
  </header>
</template>