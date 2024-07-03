
import { defineStore } from 'pinia'

export const usePeopleStore = defineStore('people', {
    state: () => {
        return {
            data: null,
            loading: false,
            error: null
        }
    },
    actions: {
        fetchPerson(id) {
            this.loading = true
            fetch(`https://swapi.dev/api/people/${id}`)
            .then((response) => response.json())
            .then((result) => {
              this.data = result;
            })
            .catch((error) => {
                this.error = error;
            }).finally(() => {
                this.loading = false;
            });
        }
    },
});