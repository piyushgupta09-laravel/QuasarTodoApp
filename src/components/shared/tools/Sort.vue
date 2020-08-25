<template>
<div class="col q-ml-sm">
  <q-select
    outlined
    v-model="sortBy"
    :options="options"
    emit-value
    map-options
    stack-label
    label="Sort"
  />
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      options: [
        {
          label: 'Title',
          value: 'title'
        },
        {
          label: 'Priority',
          value: 'priority'
        },
        {
          label: 'Date',
          value: 'dueDate'
        },
      ]
    }
  },
  computed: {
    ...mapState('todos', ['sort']),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        return this.setSort(value);
      }
    }
  },
  methods: {
    ...mapActions('todos', ['setSort'])
  }
}
</script>

<style scoped>
.q-select {
  flex: 0 0 112px;
}
</style>
