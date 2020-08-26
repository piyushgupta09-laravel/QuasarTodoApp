<template>
  <q-page padding>
    <q-list bordered padding>

      <q-item-label header>User Controls</q-item-label>

      <q-item tag="label" v-ripple>

        <q-item-section>
          <q-item-label>Time Format</q-item-label>
          <q-item-label caption>Show due date in 24 hrs</q-item-label>
        </q-item-section>

        <q-item-section side >
          <q-toggle
            color="blue"
            val="battery"
            v-model="timeFormat"
            @change="changeTimeFormat"
          />
        </q-item-section>

      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('settings', ["settings"]),
    timeFormat: {
      get() {
        return this.settings.timeFormat;
      },
      set(value) {
        this.changeTimeFormat(value);
      }
    }
  },
  methods: {
    ...mapActions('settings', ["changeTimeFormat"]),
  }
}
</script>

<style>

</style>
