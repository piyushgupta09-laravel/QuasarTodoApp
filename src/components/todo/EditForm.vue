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

export default {
  props: ['id', 'todo'],
  components: {
    'model-header': require('components/shared/modal/Header').default,
    'input-text': require('components/shared/form/InputText').default,
    'input-date': require('components/shared/form/InputDate').default,
    'input-time': require('components/shared/form/InputTime').default,
    'input-radio': require('components/shared/form/InputRadio').default,
    'model-footer': require('components/shared/modal/Footer').default,
  },
  mounted() {
    this.form = Object.assign({}, this.todo)
  },
  data() {
    return {
      form: {},
      inputOptions: {
        'none': { name: 'Regular', color: 'grey'},
        'low': { name: 'Remember', color: 'blue'},
        'mid': { name: 'Important', color: 'amber'},
        'high': { name: 'Very Important', color: 'red'},
      }
    }
  },
  methods: {
    ...mapActions('todos', ["todoUpdate"]),
    validateFormInput() {
      if(this.form.dueDate == '') {
        this.form.dueTime == '';
      }
      this.$refs.title.$refs.inputText.validate();
      if (!this.$refs.title.$refs.inputText.hasError) {
        this.todoUpdate({
          id: this.id,
          updates: this.form
        });
        this.$emit('closeModal');
      }
    },
    resetForm(feild) {
      switch (feild) {
        case 'title': this.form.title = ''; break;
        case 'dueDate': this.form.dueDate = ''; break;
        case 'dueTime': this.form.dueTime = ''; break;
        default: this.form = {
                  title: '',
                  dueDate: '',
                  dueTime: '',
                  priority: 'none',
                  status: false,
                };
                break;
      }
      this.$refs.title.$refs.inputText.resetValidation()
    }
  }
}
</script>

<style>
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
