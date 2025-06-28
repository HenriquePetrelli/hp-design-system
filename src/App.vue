<template>
  <div
    style="
      background-color: mintcream;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 100vh;
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

    <HpAlert message="TESTE" type="error"></HpAlert>

    <HpButtonIconPrimary
      label="teste de botao"
      icon="BE0010"
      icon-color="red"
    ></HpButtonIconPrimary>

    <!-- 
    CIRCLE1<HpSpinnerLoader type="circle1"></HpSpinnerLoader>


    RING1<HpSpinnerLoader type="ring1"></HpSpinnerLoader>

    CLOCK<HpSpinnerLoader type="clock"></HpSpinnerLoader>

    CIRCLE2<HpSpinnerLoader type="circle2"></HpSpinnerLoader>
    CIRCLE3<HpSpinnerLoader type="circle3"></HpSpinnerLoader>
    RING2<HpSpinnerLoader type="ring2"></HpSpinnerLoader>
    CIRCLE4<HpSpinnerLoader type="circle4"></HpSpinnerLoader>
    DOT2<HpSpinnerLoader type="dot2"></HpSpinnerLoader>

    RING3<HpSpinnerLoader type="ring3"></HpSpinnerLoader>

    RELOAD<HpSpinnerLoader type="reload"></HpSpinnerLoader>

    DOT3<HpSpinnerLoader type="dot3"></HpSpinnerLoader>

    DOT4<HpSpinnerLoader type="dot4"></HpSpinnerLoader>

    DOT5<HpSpinnerLoader type="dot5"></HpSpinnerLoader>

    ENGINE<HpSpinnerLoader type="engine"></HpSpinnerLoader>

    SEARCH<HpSpinnerLoader type="search"></HpSpinnerLoader> -->

    <!-- <HpAlert message="TESTE" type="info"></HpAlert> -->

    <!-- <HpAlert message="TESTE" type="success"></HpAlert> -->

    <!-- <HpAlert message="TESTE" type="alert"></HpAlert> -->
  </div>
</template>

<script setup lang="ts">
import {
  HpButtonPrimary,
  HpButtonTertiary,
  HpButtonSecondary,
  HpAlert,
  HpButtonIconPrimary,
  HpSpinnerLoader
} from './components/index'
</script>
