<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px">
    <div v-for="(icon, id) in icons" :key="id" style="text-align: center">
      <div
        style="margin-top: 8px; display: flex; align-items: center; gap: 8px"
      >
        <button @click="copyToClipboard(icon)" class="icon-button">
          <HpIcon :name="icon" size="lg" :color="color" />
          <span :class="{ 'label-white': isDarkMode }">{{ icon }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { HpIcon } from '@components'

defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  },
  icons: {
    type: Array<string>,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

const copyToClipboard = (icon: string) => {
  navigator.clipboard
    .writeText(icon)
    .then(() => {
      alert(`Ícone ${icon} copiado!`)
    })
    .catch((error) => {
      console.error('Falha ao copiar ícone: ', error)
    })
}
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
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
}

.icon-button:hover {
  border: 2px solid #ddd;
  transform: scale(1.1);
}

span {
  font-family: 'Nunito Sans';
  font-weight: 600;
}

.label-white {
  color: white;
}
</style>
