<template>
  <q-drawer
      v-model="drawer"
      show-if-above
      bordered
      :width="275"
      :breakpoint="767"
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header class="text-grey-4">
          Navigation Links
        </q-item-label>

        <q-item
          v-for="link in links"
          :key="link.id"
          :to="link.link"
          class="text-grey-4"
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
</template>

<script>
import Links from '../../data/links';
export default {
  name: 'Sidebar',
  props: ['drawer'],
  data() {
    return {
      links: Links.getLinks(),
    }
  }
}
</script>
