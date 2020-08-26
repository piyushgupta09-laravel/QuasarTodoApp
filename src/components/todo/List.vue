<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div v-if="count > 0">

      <list-header
        v-if="showListHeaders"
        :count="count"
        :title="title"
      />

      <q-list
        separator
        bordered
        :class="{ 'q-mt-md' : (!showListHeaders && title == 'Pending') }"
      >
        <todo-item
          v-for="(todo, key) in todos"
          :key="key"
          :id='key'
          :todo='todo'
        >
          {{ todo.title }}
        </todo-item>
      </q-list>
    </div>
    <div v-else>
      <list-header
        v-if="!showListHeaders && title == 'Pending'"
      >
        No {{ title }} tasks
      </list-header>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['title', 'count', 'todos'],
  components: {
    'list-header': require('components/shared/ListHeader').default,
    'todo-item': require('components/todo/Item').default,
  },
  computed: {
    ...mapGetters('settings', ["settings"]),
    showListHeaders() {
      return this.settings.singleList;
    }
  }
}
</script>
