<template>
  <v-toolbar dark color="teal">
    <v-toolbar-title bar-title>State selection</v-toolbar-title>
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="filterNotesTitle"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="What state are you from?"
        solo-inverted
        item-text="title"
        clearable
      ></v-autocomplete>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
  </v-toolbar>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
    computed:{
        filterNotesTitle(){
          return this.$store.getters['helloWorld/archivedOrUnarchivedNotes'](false)
        }  
    }
  }
</script>