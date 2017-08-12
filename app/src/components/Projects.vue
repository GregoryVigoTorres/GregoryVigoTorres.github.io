<template>
  <div id="projects-container">
    <nav>
      <router-link class="index-link" :to="{name: 'Index'}"><h2>Gregory Vigo Torres</h2></router-link>
      <router-link :to="{name: 'About'}">about</router-link>
    </nav>

    <h2 class="section-title">projects</h2>
    <div is="single-project" v-for="pr in projects" :pr="pr"></div>

    <footer>
      Gregory Vigo Torres &copy; 2017
    </footer>
  </div>
</template>

<script>
  import singleProject from '@/components/SingleProject'

  export default {
    name: 'projects',
    template: '#projects-container',
    components: {
      'single-project': singleProject,
    },
    data () {
      return {
        projects: [
          {
            name: 'spelt',
            refs: 'Scrapy, scrapy-splash',
            url: 'https://gregoryvigotorres.github.io/spelt/',
            sourceCodeUrl: 'https://github.com/GregoryVigoTorres/spelt',
            img: 'spelt.jpeg',
            description: 'Crawl a website and serialize it to plain text'
          },
          {
            name: 'Web2screenshot',
            refs: 'Scrapy, scrapy-splash',
            url: 'https://gregoryvigotorres.github.io/web2screenshot/',
            sourceCodeUrl: 'https://github.com/GregoryVigoTorres/web2screenshot',
            img: 'web2screenshot.jpeg',
            description: 'Take screenshots of an entire website'
          },
          {
            name: 'Artist\'s Site',
            refs: 'Flask, Javascript, SQLAlchemy, PostgreSQL',
            url: 'https://gregoryvigotorres.herokuapp.com/',
            sourceCodeUrl: 'https://github.com/GregoryVigoTorres/PaintingsApp',
            img: 'paintings2.jpeg',
            description: 'Painting portfolio'
          },
          {
            name: 'Not My Type',
            refs: 'Flask, SQLAlchemy, Angular 1.5',
            url: 'https://notmytype.herokuapp.com/',
            sourceCodeUrl: 'https://github.com/GregoryVigoTorres/notMyType',
            img: 'notmytype1.jpeg',
            description: 'View and download free fonts'
          },
          {
            name: 'XPathology',
            refs: 'Flask, HTML, Javascript',
            url: 'https://xpathology.herokuapp.com/',
            sourceCodeUrl: 'https://github.com/GregoryVigoTorres/xpathology',
            img: 'xpathology.jpeg',
            description: 'Xpath reference'
          },
          {
            name: 'Unofficial lxml docs',
            refs: 'Sphinx',
            url: 'https://gregoryvigotorres.github.io/lxml_docs/index.html',
            sourceCodeUrl: 'https://github.com/GregoryVigoTorres/lxml_docs',
            img: 'mylxml.jpeg',
            description: 'lxml docs redesign'
          },
          {
            name: 'Sortable tables',
            refs: 'Javascript',
            url: '',
            sourceCodeUrl: 'https://github.com/GregoryVigoTorres/sortableTables',
            img: 'sortable_tables_screenshot.jpeg',
            description: 'Micro library for sorting HTML tables'
          },
          {
            name: 'sdltm2tmx',
            refs: 'Python',
            url: '',
            sourceCodeUrl: 'https://github.com/GregoryVigoTorres/sdltm2tmx',
            img: 'screenshot_sdltm2tmx.jpeg',
            description: 'Cli app for creating a tmx1.4 translation memory from an sdltm file'
          },
        ]
      }
    }
  }
  // coming soon: flask-pymongo-security, lxml-docs, tmxgrep, factotum, this website
</script>

<style lang="scss">
@import "../assets/colors";

#projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
