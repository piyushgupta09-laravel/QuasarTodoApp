<template>
    <q-input
          outlined
          autofocus
          ref="inputText"
          :value="inputText"
          :label="inputLabel"
          @input="$emit('update:inputText', $event)"
          :rules="[val => !!val || 'Field is required']"
        >
          <template v-slot:append>
            <q-icon
              name="close"
              class="cursor-pointer"
              v-if="inputText"
              @click="$emit('update:inputText', '')"
            />
          </template>
        </q-input>
</template>

<script>
export default {
  props: ['inputLabel', 'inputText'],
}
</script>
