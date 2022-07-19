<script setup lang="ts">
import { QEditor } from "quasar";
import type { Ref } from "vue";
import { ref } from "vue";

const text: Ref<string> = ref(
  '<div align="right">Hola, cómo estás?rdfddfffddfdfdf</div><div align="right">dafdffsdfsafsafsdf</div><div align="right">safd</div><div align="right">sadf</div><div align="center"><b>safsaf</b><br></div>'
);
</script>

<template>
  <div class="container">
    <QEditor v-model="text" />
  </div>

  {{ text }}
</template>

<style scoped lang="sass"></style>
