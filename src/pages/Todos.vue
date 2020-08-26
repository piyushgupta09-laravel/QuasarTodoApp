<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">

      <!-- SEARCH & SORT -->
      <div>
        <div class="row">
          <todo-search></todo-search>
          <todo-sort></todo-sort>
        </div>
        <p
          class="text-overline text-center"
          v-if="showEmptySearchResult"
        >
          No search result
        </p>
      </div>

      <q-scroll-area class="q-scroll-area">

        <!-- PENDING LISTS -->
        <todo-list
          v-if="!showEmptyTodosList && !showEmptySearchResult"
          title="Pending"
          :todos="pendTodos"
          :count="showPendingTodosList"
        />

        <!-- DONE LIST -->
        <todo-list
          v-if="!showEmptyTodosList && !showEmptySearchResult"
          title="Completed"
          :todos="doneTodos"
          :count="showDoneTodosList"
        />

      </q-scroll-area>

      <!-- EMPTY -->
      <div v-if="showEmptyTodosList"
        class="absolute-center text-h6 text-center text-grey-5">
        Lets get started
      </div>

      <div class="absolute-bottom-right q-ma-lg">

        <!-- BUTTON -->
        <q-btn
          round
          color="primary"
          size="1rem"
          icon="add"
          @click="toggleFormDisplay(true)"
        />

        <!-- DIALOG -->
        <q-dialog
          v-model="addTodoForm"
          persistent
          transition-show="scale"
          transition-hide="scale">
          <create-todo-form @closeModal="toggleFormDisplay(false)" />
        </q-dialog>

      </div>

    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data() {
    return {
      addTodoForm: false
    }
  },
  components: {
    'todo-search': require('components/shared/tools/Search').default,
    'todo-sort': require('components/shared/tools/Sort').default,
    'todo-list': require('components/todo/List').default,
    'create-todo-form': require('components/todo/CreateForm').default,
  },
  computed: {
    ...mapGetters('todos', ["doneTodos", "pendTodos"]),
    ...mapState('todos', ["search"]),
    showDoneTodosList() {
      return Object.keys(this.doneTodos).length;
    },
    showPendingTodosList() {
      return Object.keys(this.pendTodos).length;
    },
    showEmptySearchResult() {
      if (this.search) {
        if (!this.showDoneTodosList && !this.showPendingTodosList) {
          return true;
        }
      }
      return false;
    },
    showEmptyTodosList() {
      return !this.showEmptySearchResult
              && !this.showDoneTodosList
              && !this.showPendingTodosList;
    },
  },
  methods: {
    toggleFormDisplay(state) {
      this.addTodoForm = state;
    }
  }
}
</script>

<style scoped>
.q-scroll-area {
  display: flex;
  flex: 1;
}
.list {
  max-width: 400px;
}
.modal-size-medium {
  width: 500px;
  max-width: 80vw;
}
.q-input {
  margin-bottom: 1rem;
}
.split-2 {
  width: 45%;
}
</style>
