<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    "
  >
    <HpButtonSecondary
      label="Quero prosseguir 1"
      icon="BE0010"
      icon-position="right"
      color="green"
      size="large"
      background-color="#2cb9c1"
      :tabindex="1"
    />

    <br />
    <br />
    <br />

    <HpButtonSecondary
      label="Quero prosseguir 2"
      icon="BE0010"
      icon-position="left"
      color="red"
      size="regular"
      background-color="secondary"
      disabled
      :tabindex="2"
    />

    <br />
    <br />
    <br />

    <HpButtonPrimary label="Quero prosseguir 3" icon="BE0010" :tabindex="3" />

    <HpButtonSecondary label="Quero prosseguir 3" icon="BE0010" :tabindex="3" />
  </div>
</template>

<script setup lang="ts">
import { HpButtonPrimary, HpButtonSecondary } from './components/index'
</script>
