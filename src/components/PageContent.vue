<script setup lang="ts">
import { onMounted, ref, toRefs, defineProps } from "vue";
import data from "@/data.json";
const loadedData = ref<dataItem[]>([]);
const props = defineProps(["search"]);
const { search } = toRefs(props);
function getNow() {
  const today = new Date();
  const date = 
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
}
type dataItem = {
  importance: String,
        equipment: String,
        message: String,
        responsible: String,
        read: Boolean,
        date: String
};
function loadData (){
  const item: dataItem = data[0];
  item["date"] = getNow();
  loadedData.value.push(item);
  data.shift();
};
const setHighLight = (arr) => {
  return arr.map((item) => {
    let status = false;
    if (
      search.value.length > 1 &&
      item.message.indexOf(search.value.toLowerCase()) !== -1 &&
      !status
    ) {
      const regex = new RegExp(search.value, "g");
      console.log(regex);
      return {
        ...item,
        message: item.message.replaceAll(
          regex,
          "<a  style='background:red'>" + search.value + "</a>"
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
