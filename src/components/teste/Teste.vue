<template>
  <div>
    <h1>{{ textProp }}</h1>
    <p>Boolean: {{ booleanProp }}</p>
    <p>Number: {{ numberProp }}</p>
    <p>Range: {{ rangeProp }}</p>
    <p>Radio: {{ radioProp }}</p>
    <p>Inline Radio: {{ inlineRadioProp }}</p>
    <p>Check: {{ checkProp }}</p>
    <p>Inline Check: {{ inlineCheckProp }}</p>
    <p>Select: {{ selectProp }}</p>
    <p>Multi-Select: {{ multiSelectProp }}</p>
    <p>Object: {{ objectProp }}</p>
    <p>Array: {{ arrayProp }}</p>
    <p>
      Color:
      <span :style="{ backgroundColor: colorProp }">{{ colorProp }}</span>
    </p>
    <p>Date: {{ dateProp }}</p>
    <p>File: {{ fileProp ? fileProp.name : 'No file selected' }}</p>
  </div>
</template>

<script setup>
defineProps: ({
  textProp: {
    type: String,
    default: 'Hello Storybook'
  },
  booleanProp: {
    type: Boolean,
    default: true
  },
  numberProp: {
    type: Number,
    default: 42
  },
  rangeProp: {
    type: Number,
    default: 50
  },
  radioProp: {
    type: String,
    default: 'Option 1'
  },
  inlineRadioProp: {
    type: String,
    default: 'Option 1'
  },
  checkProp: {
    type: Array,
    default: () => ['Option 1', 'Option 3']
  },
  inlineCheckProp: {
    type: Array,
    default: () => ['Option 1', 'Option 3']
  },
  selectProp: {
    type: String,
    default: 'Option 2'
  },
  multiSelectProp: {
    type: Array,
    default: () => ['Option 1', 'Option 2']
  },
  objectProp: {
    type: Object,
    default: () => ({ key1: 'value1', key2: 'value2' })
  },
  arrayProp: {
    type: Array,
    default: () => ['Item 1', 'Item 2']
  },
  colorProp: {
    type: String,
    default: '#ff00ff'
  },
  dateProp: {
    type: String,
    default: new Date().toISOString().substr(0, 10)
  },
  fileProp: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
div {
  padding: 20px;
}
</style>
