<template>
  <div>
    <list-header :count="Object.keys(todos).length" :title="title" />
    <q-list separator bordered>
      <todo-item
        v-for="(todo, key) in todos"
        :key="key"
        :id='key'
        :todo='todo'
      >
        {{ todo.title }}
      </todo-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['title', 'todos'],
  components: {
    'list-header': require('components/shared/ListHeader').default,
    'todo-item': require('components/todo/Item').default,
  }
}
</script>
