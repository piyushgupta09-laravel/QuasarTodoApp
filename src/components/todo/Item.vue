<template>
  <q-item
    clickable
    v-ripple
    @click="markCompleted"
    :class="todo.priority"
  >
    <!-- CHECKBOX -->
    <q-item-section side top>
      <q-checkbox :value="todo.status" />
    </q-item-section>

    <!-- TODO TITLE -->
    <q-item-section>
      <q-item-label
        class="text-subtitle1"
        :class="{'completed' : todo.status }"
      >
        {{ todo.title }}
      </q-item-label>
      <q-item-label caption class="text-uppercase">
        overdue
      </q-item-label>
    </q-item-section>

    <!-- DUE-DATE & DUE-TIME -->
    <q-item-section side top v-if="todo.dueDate">
      <q-item-label caption>
        {{ todo.dueDate }}
        <q-icon name="event" size="1rem"/>
      </q-item-label>
      <q-item-label caption>
        {{ todo.dueTime }}
        <q-icon name="schedule" size="1rem"/>
      </q-item-label>
    </q-item-section>

    <!-- ACTION BUTTONS -->
    <q-item-section side>
      <div class="row">
        <q-btn
          flat round dense
          color="green" icon="edit"
          @click.stop="dialogForm = true"/>
        <q-btn
          flat round dense
          color="red" icon="delete"
          @click.stop="dialogConfirm = true"/>
      </div>
    </q-item-section>

    <!-- DIALOG FORM -->
    <q-dialog
      v-model="dialogForm"
      persistent
      transition-show="scale"
      transition-hide="scale">
      />
      <edit-todo-form :id='id' :todo='todo' @closeModal="dialogForm = false" />
    </q-dialog>

    <!-- DIALOG CONFIRM -->
    <q-dialog
      v-model="dialogConfirm"
      persistent
      transition-show="scale"
      transition-hide="scale">
      <q-card>
        <q-card-section class="row items-center">
          <q-icon name="warning" color="primary" text-color="white" size="2rem" />
          <span class="q-ml-sm">Are you sure you want to delete todo ?</span>
          <span class="q-ml-sm">This action cannot be reversed.</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Yes, Confirm"
            color="negative"
            @click.stop="todoDelete({ id: id })"
            v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-item>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['todo', 'id'],
  components: {
    'edit-todo-form': require('components/todo/EditForm').default,
  },
  data() {
    return {
      dialogConfirm: false,
      dialogForm: false,
    }
  },
  methods: {
    ...mapActions('todos', ["todoUpdate", "todoDelete"]),
    markCompleted() {
      this.todoUpdate({
        id:this.id,
        updates:{
          status: !this.todo.status
        }
      })
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
