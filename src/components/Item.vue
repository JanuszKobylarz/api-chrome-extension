<template>
  <div>
    <div v-for="entity in Object.entries(data)" :key="entity[0]">
      <p class="entity">{{ entity[0] }}: {{ entity[1] }}</p>
    </div>
  </div>
</template>
  <script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
h1 {
  color: #333;
}

.entity {
  color: #666;
  font-size: 20px;
  margin: 0.5em 0;
}
</style>