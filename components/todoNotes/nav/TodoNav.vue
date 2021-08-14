<template>
  <div>


  <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
  >
    <v-btn>
      <span>about me</span>

      <v-icon small>mdi-info</v-icon>
    </v-btn>

    <v-btn>
      <span>contact me</span>

      <v-icon>mdi-phone-in-talk</v-icon>
    </v-btn>

    <v-btn>
      <span>my resume</span>

      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn>
      <span>home</span>

       <v-icon small>mdi-home</v-icon>
    </v-btn>
  </v-bottom-navigation>


  </div>
</template>

<script>
  export default {
    data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'green'
          case 1: return 'light-blue'
          case 2: return 'navy'
          case 3: return 'cyan'
          default: return 'Teal'
        }
      },
    },
  }
</script>

<style>

</style>