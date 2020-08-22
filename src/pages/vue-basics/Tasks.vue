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
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Go to shop',
          dueDate: '2020/08/25',
          dueTime: '15:30',
          priority: 1,
          status: false
        },
        {
          id: 2,
          title: 'Get Bananas',
          dueDate: '2020/08/25',
          dueTime: '15:30',
          priority: 2,
          status: false
        },
        {
          id: 3,
          title: 'Get More Apples',
          dueDate: '2020/08/26',
          dueTime: '18:30',
          priority: 2,
          status: false
        },
      ]
    }
  },
  components: {
    'task': require('components/vue-basics/Task').default
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
