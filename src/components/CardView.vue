<script setup>
import { ref, defineProps, computed, toRefs, onMounted } from "vue";
import Card from "primevue/card";
const activeItem = ref(null);
const props = defineProps(['data'])
const { data  } = toRefs(props);
const computedData = computed(() => data.value || [])
onMounted(() => {
  document.addEventListener("keydown", function (e) {
    if (e.code == "Enter") {
      activeItem.value.read = true;
    }
  });
});
</script>


<template  >
  <div class="grid">
    <div v-for="(item, index) in computedData" :key="index" class="col-4">
      <Card :class="{ read: item.read }" @click="activeItem = item">
        <template #content>
          <div class="card-content">
            <div class="main-info">
              <div class="info-row">
                <div class="info-label">Дата</div>
                <div class="info-data">{{ item.date }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Важность</div>
                <div class="info-data">{{ item.importance }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Оборудование</div>
                <div class="info-data">{{ item.equipment }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Сообщение</div>
                <div class="info-data" v-html="item.message"></div>
              </div>
            </div>
            <div class="user-info">
              <div class="ava-wrapper">
                <div class="ava"></div>
              </div>
              <div class="name-wrapper">
                {{ item.responsible }}
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>



