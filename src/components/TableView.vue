<script setup>
import {defineProps, toRefs, computed} from 'vue'
import DataTable from "primevue/datatable";
import Column from "primevue/column";
const props = defineProps(['data'])
const { data  } = toRefs(props);
const computedData = computed(() => data.value || [])

</script>

<template>
  <DataTable :value="computedData" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" :key="computedData.length">
        <Column field="date" header="Дата"></Column>
        <Column field="importance" header="Важность"></Column>
        <Column field="equipment" header="Оборудование"></Column>
        <Column field="message" header="Сообщение">
        <template #body="slotProps">
            <span v-html="slotProps.data.message">
              </span>
          </template>
        </Column>
        <Column field="responsible" header="Ответственный"></Column>
      </DataTable>
</template>


