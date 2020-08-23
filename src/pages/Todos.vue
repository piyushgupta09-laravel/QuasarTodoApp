<template>
  <q-page padding>
    <q-list
      separator
      bordered
    >
      <todo
        v-for="(todo, index) in todos"
        :key="todo.id"
        :index='index'
        :todo='todo'
        v-on:todo-complete='todoComplete($event)'
        v-on:todo-delete='todoDelete($event)'
      >
        {{ todo.title }}
      </todo>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {
    'todo': require('components/Todo').default,
  },
  computed: {
    ...mapGetters('todos', ["todos"])
  },
  methods: {
    todoComplete(id) {
      this.todos[id].status = !this.todos[id].status;
    },
    todoDelete(id) {
      this.todos.splice(id, 1);
    }
  }
}
</script>

<style scoped>
.list {
  max-width: 400px;
}
</style>
