<template>
  <q-input
    outlined
    :value="inputTime"
    :label="inputLabel"
    @input="$emit('update:inputTime', $event)"
    >
      <template v-slot:prepend>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time
              :value="inputTime"
              @input="$emit('update:inputTime', $event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          class="cursor-pointer"
          v-if="inputTime"
          @click="$emit('update:inputTime', '')"
        />
      </template>
    </q-input>
</template>

<script>
export default {
  props: ['inputLabel', 'inputTime']
}
</script>
