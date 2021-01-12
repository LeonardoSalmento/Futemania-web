<template>
  <div id="app">
    <Header 
    @select-championship="changeChampionship"
    @change-component="changeComponent"
    />
    <Section 
    :championship="championship"
    :current-component="currentSectionComponent"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Section
  }, 
  data() {
    return {
      championship: 'Campeonato Alemão',
      currentSectionComponent: 'SectionBanner'
    }
  },
  methods: {
    changeChampionship(value){
      this.championship = value;
    },
    changeComponent(value){
      let component;
      
      switch(value){
        case 'home':
        default:
          component = 'SectionBanner'
        
        break;
        
        case 'news':
          component = 'SectionNews'
          break;
      }

      this.currentSectionComponent = component;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
