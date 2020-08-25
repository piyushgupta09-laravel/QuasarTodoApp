<template>
  <q-input
    outlined
    :value="inputDate"
    :label="inputLabel"
    @input="$emit('update:inputDate', $event)"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date
            :value="inputDate"
            @input="$emit('update:inputDate', $event)"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
    <template v-slot:append>
      <q-icon
        name="close"
        class="cursor-pointer"
        v-if="inputDate"
        @click="$emit('update:inputDate', '')"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['inputLabel', 'inputDate']
}
</script>
