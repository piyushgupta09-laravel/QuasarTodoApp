<template>
  <q-page padding>

    <todo-list title="Pending" :todos="pendTodos" />

    <todo-list title="Completed" :todos="doneTodos" />

    <div
      v-if="!Object.keys(pendTodos).length && !Object.keys(doneTodos).length"
      class="absolute-center text-center text-amber-13"
    >
      <q-avatar icon="mood" size="6rem" color="text-amber-10" />
      <p style="font-size: 18px; margin-bottom: 0px">
        Hurray !!
        <br>No task to do
        <br>Why not add some tasks
      </p>
    </div>

    <div class="absolute-bottom-right q-ma-lg">

      <!-- BUTTON -->
      <q-btn
        round
        color="primary"
        size="1rem"
        icon="add"
        @click="displayForm = true" />

      <!-- DIALOG -->
      <q-dialog
        v-model="displayForm"
        persistent
        transition-show="scale"
        transition-hide="scale">
        <create-todo-form @closeModal="displayForm = false" />
      </q-dialog>

    </div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      displayForm: false
    }
  },
  components: {
    'todo-list': require('components/todo/List').default,
    'create-todo-form': require('components/todo/CreateForm').default,
  },
  computed: {
    ...mapGetters('todos', ["doneTodos", "pendTodos"])
  },
}
</script>

<style scoped>
.list {
  max-width: 400px;
}
</style>
