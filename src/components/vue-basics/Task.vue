<template>
  <li class="list-item" :class="{ 'completed' : task.status }">
    <h5><slot><!--{{ task.title }}--></slot></h5>
    <p> Due on {{ task.dueDate }} at {{ task.dueTime }}</p>
    <button @click="markCompleted(index)">Completed</button>
    <button @click="deleteTask(index)">Delete</button>
  </li>
</template>

<script>
export default {
  props: ['index', 'task'],
  methods: {
    markCompleted(id) {
      this.$emit('mark-complete', id);
    },
    deleteTask(id) {
      this.$emit('task-delete', id);
    }
  },
}
</script>

<style>
p, h5 {
  margin: 0px;
}
p {
  padding-top: 2px;
  padding-bottom: 2px;
}
.list-item {
  margin-bottom: 0.5rem;
  list-style: none;
  padding: 1rem 1.5rem;
  border: 1px solid goldenrod;
  position: relative;
}
button {
  font-weight: 400;
  letter-spacing: 1px;
  color: white;
  background: teal;
  border: none;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
}
.completed {
  background-color: lightgreen;
}
</style>
