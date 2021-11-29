<template>
  <div>
    <button
      type="button"
      name="button"
      @click="getMsg"
    >
      RailsからAPIを取得する
    </button>
    <div
      v-for="(msg, i) in msgs"
      :key="i"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      msgs: []
    }
  },
  methods:{
    getMsg () {
      this.$axios.$get('/api/v1/hello')
        .then(res => this.msgs.push(res))
    }
  }
}
</script>
