<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="homeAppBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <app-logo 
      @click.native="$vuetify.goTo('#scroll-top')"
    />
    <app-title
      class="hidden-mobile-and-down"
     @click.native="$vuetify.goTo('#scroll-top')"
    >

    </app-title>

    <v-spacer />

    <v-toolbar-items class="ml-2 hidden-ipad-and-down">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`-menubtn-${i}`"
        text
        :class="{ 'hidden-sm-and-down': (menu.title == 'about' )}"
        @click="$vuetify.goTo(`#${menu.title}`)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
    <before-login-signup-button></before-login-signup-button>
    <before-login-button></before-login-button>
    <v-menu
      bottom
      nudge-left="110"
      nudge-width="100"
    >
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon
          class="hidden-ipad-and-up"
          v-on="on"
        />
      </template>
      <v-list
        dense
        class="hidden-ipad-and-up"
      >
        <v-list-item
          v-for="(menu, i) in menus"
          :key="`menu-list-${i}`"
          exact
          @click="$vuetify.goTo(`#${menu.title}`)"
        >
          <v-list-item-title>
            {{ $t(`menus.${menu.title}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import AppLoginButton from '../BeforeLogin/BeforeLoginButton.vue'
import AppLogo from '../App/AppLogo.vue'
import AppSignupButton from '../BeforeLogin/BeforeLoginSignupButton.vue'
import AppTitle from '../App/AppTitle.vue'
export default {
  props:{
    menus: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  components: { AppLogo, AppSignupButton, AppLoginButton, AppTitle },
  data ({ $store }) {
    return {
      scrollY: 0,
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  },
  computed: {
    isScrollPoint () {
      return this.scrollY > (this.imgHeight - this.homeAppBarHeight)
    },
    toolbarStyle () {
      const color = this.isScrollPoint ? 'white' : 'transparent'
      const elevation = this.isScrollPoint ? 4 :0
      return { color, elevation }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.scrollY = window.scrollY
    }
  }
}
</script>