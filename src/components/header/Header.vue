<template>
  <header class="header">
    <div class="header__left">
      <slot name="header-left"></slot>
    </div>

    <slot name="header-center"></slot>

    <div class="header__right">
      <slot name="header-right"></slot>
    </div>
  </header>
</template>

<style scoped lang="scss" src="./Header.scss" />
