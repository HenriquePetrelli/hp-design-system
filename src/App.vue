<template>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    "
  >
    <HpButton
      label="Quero prosseguir"
      icon="BE0010"
      color="white"
      icon-position="right"
    ></HpButton>
    <!-- <HpCheckbox
      background-color="red"
      border-color="green"
      check-color="yellow"
      label="TESTE"
    ></HpCheckbox>

    <Icon name="AA0010" size="lg" color="red" />
    <Icon name="AA0010" size="md" color="green" />
    <Icon name="AA0010" size="sm" color="blue" /> -->
    <HpIcon name="AA0020" size="lg" color="red" />
  </div>
</template>

<script setup lang="ts">
import { HpButton, HpCheckbox, HpIcon } from "./components/index";
// import Icon from './components/icons/icon/Icon.vue'
</script>
