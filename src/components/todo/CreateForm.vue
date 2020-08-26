<template>
  <q-card class="modal-size-medium">
    <model-header>Create New</model-header>
    <form @submit.prevent="validateFormInput">
      <q-card-section class="q-pb-none">
        <input-text
          autofocus
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
    <model-footer @reset-tf='resetForm'>Save</model-footer>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';
import { date } from 'quasar';
import { uid } from "quasar";
import mixinTodoCreateEdit from 'src/mixins/todo-create-edit';
export default {
  mixins: [mixinTodoCreateEdit],
  methods: {
    ...mapActions('todos', ["todoCreate"]),
    submitForm() {
      this.todoCreate({
        id: uid(),
        data: this.form
      });
    },
  }
}
</script>
