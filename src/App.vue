<template>
  <div class="container">
    <h1 class="title text-center">SW Preson</h1>
    <div v-if="peopleStore.loading" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-if="peopleStore.error" class="text-center">
      <strong>{{ peopleStore.error }}</strong>
    </div>
    <div v-if="!id">
      <p>Tab ID not found</p>
    </div>
    <div v-else>
      <h2>Tab ID: {{ id }}</h2>
      <div v-if="peopleStore.data">
        <Item :data="peopleStore.data" />
      </div>
      <button @click="fetchParams">Fetch Params</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Item from "@/components/Item.vue";

import { usePeopleStore } from "@/stores/people";
import { getCurrentTabId } from "@/stores/tab";

const id = ref(null);

const peopleStore = usePeopleStore();

getCurrentTabId().then((tabId) => {
  id.value = tabId;
});

const fetchParams = () => {
  getCurrentTabId().then((tabId) => {
    if (tabId !== null) {
      id.value = tabId;
      peopleStore.fetchPerson(id.value);
    }
  });
};
</script>