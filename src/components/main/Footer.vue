<template>
  <q-footer>
    <q-tabs
        v-model="tab"
        class="text-white"
      >
        <q-route-tab
          v-for="link in links"
          :key="link.id"
          :to="link.link"
          :icon="link.icon"
          :label="link.title"
        />
      </q-tabs>
  </q-footer>
</template>

<script>
import Links from '../../data/links';
export default {
  data() {
    return {
      links: Links.getLinks(),
      tab: 'mails'
    }
  }
}
</script>

<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
