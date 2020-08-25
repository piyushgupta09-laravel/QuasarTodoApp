<template>
  <q-card-actions class="row justify-around q-pa-md">

    <!-- NEGATIVE ACTION -->
    <q-btn
      outline
      size="1rem"
      type="reset"
      label="Reset"
      @click="resetForm"
      class="split-2 text-grey-8"
    />

    <!-- POSITIVE ACTION -->
    <q-btn
      outline
      size="1rem"
      type="submit"
      class="split-2 text-positive"
    >
      <slot></slot>
    </q-btn>

  </q-card-actions>
</template>

<script>
export default {
  props: ['label'],
  methods: {
    resetForm() {
      this.$emit('reset-tf');
    }
  }
}
</script>

<style>

</style>
