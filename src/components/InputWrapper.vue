<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
const emit = defineEmits(['set-search'])
function setSearch(e){  
  emit('set-search', e.target.value)
}
</script>

<template>
  <div class="search-wrapper">
    <InputText type="text" @input="setSearch" />
    <Button label="Поиск" />
  </div>
</template>