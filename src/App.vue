<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        CARTELERA
        <!-- <img src="@/assets/movie.png" alt=""> -->
        </router-link>
        <!-- <nav-bar></nav-bar> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs3 sm6 md1>
        <v-text-field
          label='Movie Name'
          v-model='searchString'
          >
        </v-text-field>
        </v-flex>
      <v-btn
        flat
        :disabled="!dataAvailable"
        @click="searchMovie"
      >
       <span class="mr-2">Search</span>
      </v-btn>
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>

