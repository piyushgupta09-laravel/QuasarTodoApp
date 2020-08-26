<template>
  <div class="col">
    <q-input
      autofocus
      v-select-all
      outlined
      v-model="searchQuery"
      label="Search"
      @keyup.esc="searchQuery = ''"
    >
      <template v-slot:append>
        <q-icon
          v-if="searchQuery !== ''"
          name="close" @click="searchQuery = ''"
          class="cursor-pointer"
        />
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { selectAll } from 'src/directives/selectAll';
export default {
  directives: {
    selectAll
  },
  computed: {
    ...mapState('todos', ["search"]),
    searchQuery: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      }
    }
    // searchQuery() {
    //   return this.search;
    // }
  },
  methods: {
    ...mapActions('todos', ["setSearch"])
  }
}
</script>

<style>

</style>
