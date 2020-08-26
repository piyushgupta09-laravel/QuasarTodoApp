<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-item
      clickable
      v-ripple
      @click="markCompleted"
      :class="todo.priority"
      v-touch-hold:1000.mouse="showDialogForm"
    >
      <!-- CHECKBOX -->
      <q-item-section side top>
        <q-checkbox :value="todo.status" />
      </q-item-section>

      <!-- TITLE, DATE & TIME -->
      <q-item-section>
        <q-item-label
          class="text-subtitle1" :class="{'completed' : todo.status }"
          v-html="$options.filters.searchHighlight(todo.title, search)"
        />
        <q-item-label caption v-if="todo.dueDate">
          {{ todo.dueDate | shortDate }}
          <span v-if="todo.dueTime">
            at {{ todoDueTime }}
          </span>
        </q-item-label>
      </q-item-section>

      <!-- ACTION BUTTONS -->
      <q-item-section side>
        <div class="row">
          <q-btn
            flat round dense
            color="green" icon="edit"
            @click.stop="showDialogForm"/>
          <q-btn
            flat round dense
            color="red" icon="delete"
            @click.stop="showDialogConfirm"/>
        </div>
      </q-item-section>

      <!-- DIALOG FORM -->
      <q-dialog
        v-model="dialogForm"
        persistent
        transition-show="scale"
        transition-hide="scale">
        />
        <edit-todo-form :id='id' :todo='todo' @closeModal="closeDialogForm" />
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
  </transition>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import { date } from 'quasar';
const { formatDate } = date;

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
  computed: {
    ...mapState('todos', ["search"]),
    ...mapGetters('settings', ["settings"]),
    todoDueTime() {
      if(this.settings.timeFormat) {
        let raw = this.todo.dueDate + ' ' + this.todo.dueTime;
        return formatDate(raw, 'h:mm a')
      }
      return this.todo.dueTime + ' hrs';
    }
  },
  methods: {
    ...mapActions('todos', ["todoUpdate", "todoDelete"]),
    markCompleted() {
      this.todoUpdate({
        id:this.id,
        data:{
          status: !this.todo.status
        }
      })
    },
    showDialogForm() {
      this.dialogForm = true;
    },
    closeDialogForm() {
      this.dialogForm = false;
    },
    showDialogConfirm() {
      this.dialogConfirm = true;
    }
  },
  filters: {
    shortDate(value) {
      return formatDate(value, 'D MMM')
    },
    searchHighlight(value, query) {
      if (query) {
        // Working, but only Case-Sensitive
        // return value.replace(query, '<span class="highlight">' + query + '</span>');
        // Solved case-sensitive issue
        let queryRegExp = new RegExp(query, 'ig');
        return value.replace(queryRegExp, (match) => {
          return '<span class="highlight">' + match + '</span>';
        });
      } else {
        return value;
      }
    }
  }
}
</script>

<style lang="scss">
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
.highlight {
  background: $highlight;
}
</style>
