<template>
  <header class="header">
    <div class="header__left">
      <slot name="header-left"></slot>
    </div>

    <div class="header__right">
      <slot name="header-right"></slot>
    </div>
  </header>
</template>

<style scoped lang="scss" src="./Header.scss" />
