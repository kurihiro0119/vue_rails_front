<template>
  <v-tool-var>
      {{ appName }}
  </v-tool-var>
</template>

<script>

export default{
  data ({ $config: { appName }}){
    return {
      appName
    }
  }
}
</script>
