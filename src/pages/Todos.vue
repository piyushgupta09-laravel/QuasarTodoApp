<template>
  <q-page padding>

    <!-- Todos List -->
    <q-list v-if="Object.keys(todos).length" separator bordered>
      <todo-item
        v-for="(todo, key) in todos"
        :key="key"
        :id='key'
        :todo='todo'
      >
        {{ todo.title }}
      </todo-item>
    </q-list>

    <div v-else class="absolute-center text-h6 text-center text-amber-13">
      <q-avatar icon="mood" size="6rem" color="text-amber-10" />
      <br>No task pending.
      <br>Why not add some more todos ..
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
    'todo-item': require('components/todo/Item').default,
    'create-todo-form': require('components/todo/CreateForm').default,
  },
  computed: {
    ...mapGetters('todos', ["todos"])
  },
}
</script>

<style scoped>
.list {
  max-width: 400px;
}
</style>
