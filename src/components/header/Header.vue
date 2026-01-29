<template>
  <header class="header" role="banner">
    <div class="header__left">
      <slot name="header-left" />
    </div>

    <div class="header__center">
      <slot name="header-center" />
    </div>

    <div class="header__right">
      <slot name="header-right" />
    </div>
  </header>
</template>

<style scoped lang="scss" src="./Header.scss" />
