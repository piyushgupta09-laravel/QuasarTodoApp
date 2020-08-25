<template>
  <q-banner class="text-uppercase text-dark bg-blue-grey-11 q-py-xs q-mt-md">
    <div class="row text-overline text-grey-8 text-bold">
      <span class="col text-left">{{ title }}</span>
      <span class="col text-right">{{ count }}</span>
    </div>
  </q-banner>
</template>

<script>
export default {
  props: ['count', 'title']
}
</script>

<style>
.q-banner {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
</style>
