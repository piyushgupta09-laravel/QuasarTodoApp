<template>
  <q-card class="modal-size-medium">
    <model-header>Edit Todo</model-header>
    <form @submit.prevent="validateFormInput">
      <q-card-section class="q-pb-none">
        <input-text
          ref="title"
          inputLabel='todo title'
          :inputText.sync='form.title'
        />
        <input-date
          inputLabel='Due Date'
          :inputDate.sync='form.dueDate'
        />
        <input-time
          v-if="form.dueDate"
          inputLabel='Due Time'
          :inputTime.sync='form.dueTime'
        />
        <input-radio
          inputLabel='Priorities'
          :inputOptions="inputOptions"
          :inputRadio.sync='form.priority'
        />
      </q-card-section>
    <model-footer @reset-tf='resetForm'>Update</model-footer>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';
import { date } from 'quasar'
import mixinTodoCreateEdit from 'src/mixins/todo-create-edit';
export default {
  props: ['id', 'todo'],
  mixins: [mixinTodoCreateEdit],
  mounted() {
    this.form = Object.assign({}, this.todo)
  },
  methods: {
    ...mapActions('todos', ["todoUpdate"]),
    submitForm() {
      this.todoUpdate({
        id: this.id,
        data: this.form
      });
    },
  }
}
</script>
