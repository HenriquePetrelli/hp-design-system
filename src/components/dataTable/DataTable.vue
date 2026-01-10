<template>
  <section
    class="data-table"
    role="region"
    :class="{ 'data-table--has-row-line': hasRowLine }"
  >
    <!-- Search -->
    <HpInputText
      v-if="searchable"
      class="data-table__search"
      leadingIcon="BE0090"
      :model-value="search"
      @update:model-value="search = $event"
      :aria-label="placeholderSearch"
      :label="placeholderSearch"
      :hideLabel="true"
    />

    <table class="data-table__table">
      <!-- Header -->
      <thead>
        <tr class="data-table__row">
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="data-table__header-cell"
            :class="{
              'data-table__header-cell--right': column.align === 'right'
            }"
            :style="{ width: column.width }"
          >
            <HpText>{{ column.label }}</HpText>
          </th>

          <th
            v-if="$slots.actions"
            class="data-table__header-cell data-table__header-cell--right"
          >
            <HpText>Ações</HpText>
          </th>
        </tr>
      </thead>

      <!-- Body -->
      <tbody class="data-table__body">
        <!-- Empty state -->
        <tr v-if="filteredItems.length === 0" class="data-table__row">
          <td
            class="data-table__cell"
            :colspan="columns.length + ($slots.actions ? 1 : 0)"
            role="status"
            aria-live="polite"
          >
            <HpText>Nenhum resultado encontrado.</HpText>
          </td>
        </tr>

        <tr
          v-else
          v-for="(item, rowIndex) in filteredItems"
          :key="rowIndex"
          class="data-table__row"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            class="data-table__cell"
            :class="{
              'data-table__cell--right': column.align === 'right'
            }"
            :data-label="column.label"
          >
            <HpText>
              {{ item[column.key] }}
            </HpText>
          </td>

          <!-- Actions -->
          <td
            v-if="$slots.actions"
            class="data-table__cell data-table__cell--actions"
          >
            <slot name="actions" :item="item" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue'
import { HpInputText, HpText } from '@components'

type DataItem = Record<string, any>

const props = defineProps({
  searchable: {
    type: Boolean,
    default: true
  },
  placeholderSearch: {
    type: String,
    default: 'Digite para buscar...'
  },
  hasRowLine: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array as PropType<DataItem[]>,
    required: true
  },
  columns: {
    type: Array as PropType<
      {
        key: string
        label: string
        width?: string
        align?: 'left' | 'center' | 'right'
      }[]
    >,
    required: true
  }
})

const search = ref('')

const filteredItems = computed(() => {
  if (!search.value) return props.items

  return props.items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<style src="./DataTable.scss" scoped lang="scss" />
