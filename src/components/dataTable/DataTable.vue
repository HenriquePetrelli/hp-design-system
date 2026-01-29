<template>
  <section
    class="data-table"
    role="region"
    :class="{
      'data-table--has-divider': hasDivider,
      'data-table--elevated': elevated
    }"
  >
    <slot name="filters" />

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
          <tr>
            <th
              v-for="(column, index) in columns"
              :key="index"
              class="data-table__header-cell"
              :class="headerAlignClass(column)"
              :style="{ width: column.width }"
            >
              <HpText size="xs" color="var(--data-table-text-secondary)">
                {{ column.label }}
              </HpText>
            </th>

            <th
              v-if="$slots.actions"
              class="data-table__header-cell data-table__header-cell--right"
            >
              <HpText size="xs" color="var(--data-table-text-secondary)">
                Ações
              </HpText>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-if="filteredItems.length === 0">
            <td
              class="data-table__cell data-table__cell--empty"
              :colspan="totalColumns"
            >
              <HpText size="sm" color="var(--data-table-text-muted)">
                Nenhum resultado encontrado.
              </HpText>
            </td>
          </tr>

          <tr v-else v-for="(item, rowIndex) in filteredItems" :key="rowIndex">
            <td
              v-for="column in columns"
              :key="column.key"
              class="data-table__cell"
              :class="cellAlignClass(column)"
            >
              <slot
                :name="`cell-${column.key}`"
                :item="item"
                :value="item[column.key]"
                :column="column"
              >
                <HpText size="sm">
                  {{ item[column.key] }}
                </HpText>
              </slot>
            </td>

            <td
              v-if="$slots.actions"
              class="data-table__cell data-table__cell--actions"
            >
              <slot name="actions" :item="item" />
            </td>
          </tr>
        </tbody>

        <tfoot
          v-if="
            $slots['footer-left'] ||
            $slots['footer-center'] ||
            $slots['footer-right']
          "
        >
          <tr>
            <td :colspan="totalColumns">
              <div
                class="data-table__footer"
                :class="[footerSlotsClass, lastColumnAlignClass]"
              >
                <div
                  v-if="$slots['footer-left']"
                  class="data-table__footer-left"
                >
                  <slot name="footer-left" />
                </div>

                <div
                  v-if="$slots['footer-center']"
                  class="data-table__footer-center"
                >
                  <slot name="footer-center" />
                </div>

                <div
                  v-if="$slots['footer-right']"
                  class="data-table__footer-right"
                >
                  <slot name="footer-right" />
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, PropType, useSlots } from 'vue'
import { HpInputText, HpText } from '@components'

type DataItem = Record<string, any>

const slots = useSlots()

const props = defineProps({
  searchable: { type: Boolean, default: true },
  placeholderSearch: { type: String, default: 'Digite para buscar...' },
  hasDivider: { type: Boolean, default: false },
  elevated: { type: Boolean, default: true },
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

const totalColumns = computed(
  () => props.columns.length + (slots.actions ? 1 : 0)
)

/* ================= Alignment Logic ================= */

const lastColumnAlignClass = computed(() => {
  const last = props.columns[props.columns.length - 1]
  const align = last?.align ?? 'left'
  return `is-last-column-${align}`
})

const footerSlotsClass = computed(() => ({
  'has-left': !!slots['footer-left'],
  'has-center': !!slots['footer-center'],
  'has-right': !!slots['footer-right']
}))

const headerAlignClass = (column: any) => ({
  'data-table__header-cell--right': column.align === 'right',
  'data-table__header-cell--center': column.align === 'center'
})

const cellAlignClass = (column: any) => ({
  'data-table__cell--right': column.align === 'right',
  'data-table__cell--center': column.align === 'center'
})
</script>

<style scoped lang="scss" src="./DataTable.scss" />
