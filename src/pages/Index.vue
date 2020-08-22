<template>
  <q-page padding>

    <!-- ONCLICK METHOD -->
    <button @click="clearInput">Clear</button><br>

    <!-- REFS -->
    <!-- HANDLING KEY EVENTS via METHOD  -->
    <input v-model="title" @keyup="handleKeyup" ref="titleInput">

    <!-- HANDLING KEY EVENTS DIRECTLY -->
    <input v-model="title" @keypress.esc="clearInput" @keyup.enter="alertInput">

    <!-- CLASS & STYLE BINDING -->
    <h3
      v-if="title != ''"
      class="border"
      v-bind:class="{ 'error' : title.length > 22 }"
    >
      {{ title }}
      <small :style="errorStyle">[{{ title.length }}]</small>
    </h3>


    <!-- CONDITIONAL RENDERING -->
    <h3 v-else>No message available</h3>

    <!-- COMPUTED PROPERTIES -->
    <h5 :class="color" v-show="title != ''">
      <small>Uppercase : </small>{{ titleUppercased }}
    </h5>

    <!-- FILTERS -->
    <h5 :class="color" v-show="title != ''">
      <small>Lowecase : </small>{{ title | titleLowercased }}
    </h5>

    <!-- METHODS BINDING -->
    <ul>
      <li @mouseenter="changeColor('bg-primary')">Primary</li>
      <li @mouseenter="changeColor('bg-secondary')">Secondary</li>
      <li @mouseenter="changeColor('bg-accent')">Accent</li>
      <li @mouseenter="changeColor('')">No Color</li>
    </ul>

    <!-- CUSTOM VUE DIRECTIVE -->
    <input v-model="counter" v-autofocus>
    <button @click="updateCounter">Update Counter</button>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      title: 'I love Vue.js',
      color: '',
      counter: 0,
    }
  },
  methods: {
    clearInput() {
      this.title = ''
    },
    alertInput() {
      alert(this.title);
    },
    changeColor(value) {
      this.color = value;
    },
    handleKeyup(e) {
      if (e.keyCode == 27) {
        this.clearInput();
      }
      if (e.keyCode == 13) {
        this.alertInput();
      }
      // otherwise do nothing
      console.log(e);
    },
    updateCounter() {
      this.counter++;
    }
  },
  computed: {
    titleUppercased () {
      return this.title.toUpperCase();
    },
    errorStyle() {
      if (this.title.length > 22) {
        return {
          'color' : 'blue',
          'background' : 'grey'
        }
      } else {
        return '';
      }
    }
  },
  filters: {
    titleLowercased(value) {
      return value.toLowerCase();
    }
  },
  directives: {
    autofocus: {
      inserted(el) {
        // console.log('Insersted');
        el.focus();
      }
    }
  },
  // LIFE CYCLE HOOKS
  beforeCreate() {
    // Before creation of component itself
  },
  created() {
    // Component has been created virtually.
    // All data & methods have been loaded,
    // view makup has been determined,
    // but makrup is not commited to browser.
  },
  beforeMount() {
    // Markup determined above will be commited to browser after this method
  },
  mounted() {
    // Markup view is been commited to browser and its visible now
    // This is a place to call or fire any initialisation code, on first load of component
    console.log(this.$refs);
    this.$refs.titleInput.className = 'bg-positive';
  },
  beforeUpdate() {
    // Before updating the view
  },
  updated() {
    // User clicked a button and view updated
  },
  beforeDestroy() {
    // before destroying the component
    // Good place to save any un-saved data or state
  },
  destroyed() {
    // Finally the component and all its state is been destroyed
  },


}
</script>

<style>
ul {
  display: flex;
}
li {
  margin-right: 2rem;
}
.border {
  border: 1px solid #b30505;
}
input, button {
  font-size: 1.5rem;;
}
.error {
  color: #b30505;
  background: yellow;
}
</style>
