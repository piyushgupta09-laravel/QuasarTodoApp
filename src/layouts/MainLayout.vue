<template>
  <!-- hHh LpR lff -->
  <q-layout view="lHh LpR lff">

    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title class="absolute-center">Todo App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawer"
      show-if-above
      bordered
      :width="275"
      :breakpoint="767">
      <q-list light>
        <q-item-label header>
          Navigation Links
        </q-item-label>

        <q-item
          v-for="link in links"
          :key="link.id"
          :to="link.link"
          clickable
          exact
        >
          <q-item-section v-if="link.icon" avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
            <q-item-label caption>
              {{ link.caption }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs>
          <q-route-tab
            v-for="link in links"
            :key="link.id"
            :to="link.link"
            :icon="link.icon"
            :label="link.title"
          />
        </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import Links from '../data/links';
export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawer: false,
      links: Links.getLinks(),
    }
  }
}
</script>

<style lang="scss">
.q-drawer {
    .q-router-link--exact-active {
      background-color: #eeeeee;
      .q-icon,
      .q-item__label {
        color: $primary;
      }
  }
}
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
