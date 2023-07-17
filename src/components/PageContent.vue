<script setup lang="ts">
import { onMounted, ref, toRefs, defineProps } from "vue";
import data from "@/data.json";
const loadedData = ref<dataItem[]>([]);
const props = defineProps(["search"]);
const { search } = toRefs(props);
type dataItem = {
  importance: String;
  equipment: String;
  message: String;
  responsible: String;
  read: Boolean;
  date: String;
};
function getNow() {
  const today = new Date();
  const date =
    checkdateFormat(today.getDate()) + "." + checkdateFormat(today.getMonth() + 1) + "." + today.getFullYear();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
}
function checkdateFormat(date){
  if(date <10){
    return '0' + date;
  }
  return date;
}
function loadData() {
  const item: dataItem = data[0];
  item["date"] = getNow();
  loadedData.value.push(item);
  data.shift();
}
const setHighLight = (arr: []) => {
  return arr.map((item) => {
    if (
      search.value.length > 1 &&
      item.message.indexOf(search.value.toLowerCase()) !== -1 ) {
      const regex = new RegExp(search.value, "g");
      return {
        ...item,
        message: item.message.replaceAll(
          regex,
          "<a  style='background:yellow'>" + search.value + "</a>"
        ),
      };
    }

    return item;
  });
};
onMounted(() => {
  setInterval(() => {
    if (data.length > 0) {
      loadData();
    }
  }, 500);
});
</script>
<template>
  <div class="content">
    <router-view :data="setHighLight(loadedData)" :key="search.length" />
  </div>
</template>
