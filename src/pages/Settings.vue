<template>
  <q-page padding>
    <!-- SETTINGS -->
    <q-list class="q-mb-md" bordered padding>
      <!-- SECTION HEADER -->
      <q-item-label header>Setting</q-item-label>
      <!-- TIME FORMAT -->
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Time Format</q-item-label>
          <q-item-label caption>Show due date in 24 hrs</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            color="blue"
            v-model="timeFormat"
          />
        </q-item-section>
      </q-item>
      <!-- MULTI LIST -->
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Multi List</q-item-label>
          <q-item-label caption>Seprate list for completed and pending</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            color="blue"
            v-model="singleList"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <!-- MORE -->
    <q-list bordered padding>
      <!-- SECTION HEADER -->
      <q-item-label header>More</q-item-label>
      <!-- WEBSITE -->
      <q-item @click="visitOurWebsite" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <!-- EMAIL -->
      <q-item @click="emailUs" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <!-- HELP -->
      <q-item to="/settings/help" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
		</q-list>

  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { openURL } from 'quasar';
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
    },
    singleList: {
      get() {
        return this.settings.singleList;
      },
      set(value) {
        this.changeSingleList(value);
      }
    }
  },
  methods: {
    ...mapActions('settings', ["changeTimeFormat", "changeSingleList"]),
    visitOurWebsite() {
      openURL('http://www.google.com')
    },
    emailUs() {
      window.location.href = 'mailto:hello@awesometodo.com?subject=Awesome Todo Feedback'
    }
  }
}
</script>

<style>

</style>
