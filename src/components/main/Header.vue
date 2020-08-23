<template>
  <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toogleDrawer"
        />
        <q-toolbar-title class="absolute-center">Todo App</q-toolbar-title>
      </q-toolbar>
    </q-header>
</template>

<script>
export default {
  methods: {
    toogleDrawer() {
      this.$emit('toggle-drawer');
    }
  }
}
</script>

<style>

</style>
