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
    <HpButtonPrimary
      label="Quero prosseguir 1"
      icon="BE0010"
      icon-position="right"
      background-color="#000"
      size="large"
      :tabindex="1"
    />

    <HpButtonPrimary
      label="Quero prosseguir 1"
      icon="BE0010"
      icon-position="right"
      size="large"
      :tabindex="1"
    />

    <br />
    <br />
    <br />

    <HpButtonSecondary
      label="Quero prosseguir 2"
      icon="BE0010"
      icon-position="left"
      size="regular"
      :tabindex="2"
    />

    <br />
    <br />
    <br />

    <HpButtonTertiary label="Quero prosseguir 3" icon="BE0010" :tabindex="3" />
  </div>
</template>

<script setup lang="ts">
import {
  HpButtonPrimary,
  HpButtonTertiary,
  HpButtonSecondary
} from './components/index'
</script>
