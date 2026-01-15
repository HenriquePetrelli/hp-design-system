<template>
  <section
    class="data-table"
    role="region"
    :class="{
      'data-table--has-divider': hasDivider,
      'data-table--elevated': elevated
    }"
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
      size="sm"
    />

    <div class="data-table__wrapper">
      <table class="data-table__table">
        <thead>
          <tr class="data-table__row data-table__row--header">
            <th
              v-for="(column, index) in columns"
              :key="index"
              class="data-table__header-cell"
              :class="{
                'data-table__header-cell--right': column.align === 'right',
                'data-table__header-cell--center': column.align === 'center'
              }"
              :style="{ width: column.width }"
            >
              <HpText size="xs" color="var(--color-text-secondary)">
                {{ column.label }}
              </HpText>
            </th>

            <th
              v-if="$slots.actions"
              class="data-table__header-cell data-table__header-cell--right"
            >
              <HpText size="xs" color="var(--color-text-secondary)"
                >Ações</HpText
              >
            </th>
          </tr>
        </thead>

        <tbody class="data-table__body">
          <!-- Empty state -->
          <tr v-if="filteredItems.length === 0">
            <td
              class="data-table__cell data-table__cell--empty"
              :colspan="columns.length + ($slots.actions ? 1 : 0)"
            >
              <HpText size="sm" color="var(--color-text-muted)">
                Nenhum resultado encontrado.
              </HpText>
            </td>
          </tr>

          <!-- Rows -->
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
                'data-table__cell--right': column.align === 'right',
                'data-table__cell--center': column.align === 'center'
              }"
            >
              <HpText size="sm" color="var(--color-text-primary)">
                {{ item[column.key] }}
              </HpText>
            </td>

            <td
              v-if="$slots.actions"
              class="data-table__cell data-table__cell--actions"
            >
              <slot name="actions" :item="item" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue'
import { HpInputText, HpText } from '@components'

type DataItem = Record<string, any>

const props = defineProps({
  searchable: { type: Boolean, default: true },
  placeholderSearch: { type: String, default: 'Digite para buscar...' },

  /** Visual */
  hasDivider: { type: Boolean, default: false },
  elevated: { type: Boolean, default: true },

  /** Data */
  items: { type: Array as PropType<DataItem[]>, required: true },
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

  const query = search.value.toLowerCase()

  return props.items.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(query)
    )
  )
})
</script>

<style scoped lang="scss" src="./DataTable.scss" />
