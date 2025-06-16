<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px">
    <div v-for="(icon, id) in icons" :key="id" style="text-align: center">
      <div
        style="margin-top: 8px; display: flex; align-items: center; gap: 8px"
      >
        <button @click="copyToClipboard(icon)" class="icon-button">
          <Icon :name="icon" size="lg" :color="color" />
          <span :class="{ 'label-white': isDarkMode }">{{ icon }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from "../../icon/Icon.vue";

defineProps({
  isDarkMode: {
    type: Boolean,
    required: true,
  },
  icons: {
    type: Array<string>,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Ícone copiado!");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
};
</script>

<style scoped>
.icon-button {
  width: 100px;
  display: flex;
  cursor: pointer;
  border: none;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s ease-in-out;
}

.icon-button:hover {
  transform: scale(1.1);
}

span {
  font-family: "Quicksand";
  font-weight: 600;
}

.label-white {
  color: white;
}
</style>
