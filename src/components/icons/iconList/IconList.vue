<template>
  <div :class="{ dark: isDarkMode }">
    <h1>A - Brands</h1>

    <h3>AA - Social Media</h3>
    <IconListButton
      :icons="socialMediaIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>AB - Communication</h3>
    <IconListButton
      :icons="communicationIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>AC - Tech</h3>
    <IconListButton
      :icons="techIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>AD - Development</h3>
    <IconListButton
      :icons="developmentIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>AE - Others</h3>
    <IconListButton
      :icons="otherBrandIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h1>B - Digital</h1>

    <h3>BA - Menu</h3>
    <IconListButton
      :icons="menuIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>BB - Arrow</h3>
    <IconListButton
      :icons="arrowIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>BC - User</h3>
    <IconListButton
      :icons="userIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>BD - Tool</h3>
    <IconListButton
      :icons="toolsIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>BE - Symbol</h3>
    <IconListButton
      :icons="symbolsIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>BF - Action</h3>
    <IconListButton
      :icons="actionsIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h3>BG - Others</h3>
    <IconListButton
      :icons="otherDigitalIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <h1>D - Places</h1>
    <IconListButton
      :icons="placeIcons"
      :color="color"
      :is-dark-mode="isDarkMode"
    />

    <!-- <h1>C - Objects</h1> -->
    <!-- <h1>E - Company</h1> -->
  </div>
</template>

<script setup>
import { computed } from "vue";
import IconListButton from "./components/IconListButton.vue";
import AllIcons from "@assets/icons/icons.json";

const props = defineProps({
  color: {
    type: String,
    default: "#757abf",
  },
});

const isDarkMode = computed(() => {
  const element = document.getElementsByClassName("docs-story")[0];
  const backgroundColor = window.getComputedStyle(element).backgroundColor;
  return backgroundColor === "rgb(51, 51, 51)";
});

const socialMediaIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("AA")).sort(),
);
const communicationIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("AB")).sort(),
);
const techIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("AC")).sort(),
);
const developmentIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("AD")).sort(),
);
const otherBrandIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("AE")).sort(),
);
const menuIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("BA")).sort(),
);
const arrowIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("BB")).sort(),
);
const userIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("BC")).sort(),
);
const toolsIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("BD")).sort(),
);
const symbolsIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("BE")).sort(),
);
const actionsIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("BF")).sort(),
);
const otherDigitalIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("BG")).sort(),
);
const placeIcons = computed(() =>
  AllIcons.filter((name) => name.startsWith("C")).sort(),
);
</script>

<style lang="scss" scoped>
.dark h1,
.dark h3 {
  color: white;
}

h1,
h3 {
  color: black;
}
</style>
