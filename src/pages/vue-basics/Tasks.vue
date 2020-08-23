<template>
  <q-page padding>
    <ul class="list">
      <task
        v-for="(task, index) in tasks"
        :key="task.id"
        :index='index'
        :task='task'
        v-on:mark-complete='markComplete($event)'
        v-on:task-delete='taskDelete($event)'
      >
        {{ task.title }}
      </task>
    </ul>
  </q-page>
</template>

<script>
import Links from '../../data/links';
export default {
  data() {
    return {
      tasks: Links.getTasks(),
    }
  },
  components: {
    'task': require('components/vue-basics/Task').default,
  },
  methods: {
    markComplete(id) {
      this.tasks[id].status = !this.tasks[id].status;
    },
    taskDelete(id) {
      this.tasks.splice(id, 1);
    }
  }
}
</script>

<style scoped>
.list {
  max-width: 400px;
}
</style>
