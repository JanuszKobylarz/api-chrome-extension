<template>
  <div class="container">
    <h1 class="title text-center">SW Preson</h1>
    <div v-if="peopleStore.loading" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-if="peopleStore.error" class="text-center">
      <strong>{{ peopleStore.error }}</strong>
    </div>
    <pre>
      {{ peopleStore.data }}
    </pre>

    <div v-if="!id">
      <p>Tab ID not found</p>
    </div>
    <div v-else>
      <button @click="fetchParams">Fetch Params</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import { usePeopleStore } from "@/stores/people";
const id = ref(1);

const peopleStore = usePeopleStore();

const fetchParams = () => {
  if (id.value === null) {
    return;
  }
  peopleStore.fetchPerson(id.value);
};
</script>