<template>
  <q-field outlined :label="inputLabel" stack-label>
    <template v-slot:control>
      <div class="self-center full-width no-outline" tabindex="0">
        <q-radio
          keep-color
          v-for="(option, key) in inputOptions"
          :key="key"
          :val="key"
          :label="option.name"
          :color="option.color"
          @input="$emit('update:inputRadio', key)"
          :value="inputRadio"
        />
      </div>
    </template>
  </q-field>
</template>

<script>
export default {
  props: ['inputLabel', 'inputRadio', 'inputOptions'],
}
</script>

