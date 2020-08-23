<template>
  <!-- hHh LpR lff -->
  <q-layout view="lHh LpR lff">
    <Header v-on:toggle-drawer="toggleDrawer"></Header>
    <Sidebar :drawer='drawer'></Sidebar>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer></Footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    'Header': require('components/main/Header').default,
    'Sidebar': require('components/main/Sidebar').default,
    'Footer': require('components/main/Footer').default,
  },
  data () {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style lang="scss">
.q-drawer {
    .q-router-link--exact-active {
      background-color: $warning;
      .q-icon,
      .q-item__label {
        color: $white;
      }
  }
}
</style>
