<template>
  <q-item
    clickable
    v-ripple
    @click="markComplete"
    :class="todo.priority"
  >
    <q-item-section side top>
      <q-checkbox v-model="todo.status" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        class="text-h6"
        :class="{'completed' : todo.status }"
      >
        {{ todo.title }}
      </q-item-label>
      <q-item-label caption class="text-uppercase">
        {{ todo.status ? 'Completed' : 'Pending' }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>
        {{ todo.dueDate }}
        <q-icon name="event" size="1rem"/>
      </q-item-label>
      <q-item-label caption>
        {{ todo.dueTime }}
        <q-icon name="schedule" size="1rem"/>
      </q-item-label>
    </q-item-section>

  </q-item>
</template>

<script>
export default {
  props: ['todo', 'index'],
  methods: {
    markComplete() {
      this.$emit('todo-complete');
    }
  }

}
</script>

<style>
.low {
  background: rgb(255, 255, 255);
}
.normal {
  background: rgb(200, 250, 200);
}
.high {
  background: rgb(250, 200, 200);
}
.completed {
  text-decoration: line-through;
}
</style>
