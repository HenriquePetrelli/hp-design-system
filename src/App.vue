<template>
  <div class="playground">
    <!-- <HpToggleSwitch v-model="value" /> -->

    <!-- <HpThemeSwitcher v-model="value2" /> -->

    <!-- <HpThemeSwitcher v-model="value2" :hasAnimation="false" /> -->
    <!-- <HpInputRange label="Selecione uma opção" v-model="selectedValue" /> -->

    <!-- <HpDataTable
    title="Usuários"
    :items="users"
    :columns="[
      { key: 'name', label: 'Nome', sortable: true },
      { key: 'email', label: 'E-mail' },
      { key: 'role', label: 'Perfil' }
    ]"
  /> -->

    <!-- <HpDataTable
    title="Benefícios"
    :items="benefits"
    :columns="[
      { key: 'name', label: 'Benefício', sortable: true },
      { key: 'type', label: 'Tipo' },
      { key: 'value', label: 'Valor', sortable: true }
    ]"
  >
    <template #cell-type="{ value }">
      <span class="badge" :class="`badge--${value.variant}`">
        {{ value.label }}
      </span>
    </template>
  </HpDataTable> -->

    <!-- <HpDataTable
    title="Salários"
    :items="salaries"
    :columns="[
      { key: 'name', label: 'Colaborador' },
      { key: 'value', label: 'Salário', sortable: true, align: 'right' }
    ]"
  >
    <template #cell-value="{ value }">
      <HpText color="success" weight="semibold">
        R$ {{ value.toLocaleString('pt-BR') }}
      </HpText>
    </template>
  </HpDataTable> -->

    <HpDataTable
      style="width: 100%"
      :items="projects"
      :columns="[
        { key: 'name', label: 'Projeto' },
        { key: 'owner', label: 'Responsável' },
        { key: 'status', label: 'Status' }
      ]"
      hasDivider
    >
      <template #actions="{ item }">
        <HpButtonIcon
          label="edit"
          icon="BF0110"
          size="sm"
          aria-label="Editar projeto"
          @click="editProject(item.id)"
        />
        <HpButtonIcon
          label="lixo"
          icon="BD0030"
          size="sm"
          aria-label="Excluir projeto"
          @click="deleteProject(item.id)"
        />
      </template>
    </HpDataTable>

    <!-- <HpDataTable
    title="Logs"
    searchable
    :page-size="10"
    :items="logs"
    :columns="[
      { key: 'name', label: 'Evento', sortable: true },
      { key: 'type', label: 'Categoria' },
      { key: 'value', label: 'ID', sortable: true }
    ]"
  /> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  HpButtonPrimary,
  HpButtonTertiary,
  HpButtonSecondary,
  HpAlert,
  HpButtonIcon,
  HpSpinnerLoader,
  HpText,
  HpHeading,
  HpRadioButton,
  HpModal,
  HpToggleSwitch,
  HpThemeSwitcher,
  HpInputNumber,
  HpInputRange,
  HpCard,
  HpDataTable
} from './components/index'

const selectedValue = ref(null)

const value2 = ref(true)

const plans = [
  { id: 1, name: 'Básico', price: 'R$ 29', active: 'Sim' },
  { id: 2, name: 'Pro', price: 'R$ 59', active: 'Não' }
]

const benefits = [
  {
    id: 1,
    name: 'Vale Refeição',
    type: { label: 'Mensal', variant: 'info' },
    value: 800
  },
  {
    id: 2,
    name: 'Plano de Saúde',
    type: { label: 'Anual', variant: 'success' },
    value: 0
  }
]

const users = [
  { id: 1, name: 'Henrique', email: 'henrique@email.com', role: 'Admin' },
  { id: 2, name: 'Maria', email: 'maria@email.com', role: 'User' }
]

const salaries = [
  { id: 1, name: 'Henrique', value: 7500 },
  { id: 2, name: 'Ana', value: 9200 }
]

const logs = [
  {
    id: 1,
    date: '2024-09-01 10:32',
    action: 'Login realizado',
    user: 'admin@empresa.com'
  },
  {
    id: 2,
    date: '2024-09-01 11:05',
    action: 'Benefício atualizado',
    user: 'rh@empresa.com'
  },
  {
    id: 3,
    date: '2024-09-01 12:10',
    action: 'Usuário removido',
    user: 'admin@empresa.com'
  }
]
const projects = [
  {
    id: 1,
    name: 'Hp Design System',
    owner: 'a',
    status: 'Em andamento'
  },
  {
    id: 2,
    name: 'Dashboard RH',
    owner: 'b',
    status: 'Concluído'
  },
  {
    id: 3,
    name: 'Portal do colaborador',
    owner: 'c',
    status: 'Em pausa'
  }
]

const editProject = (id: number) => {
  console.log('Editar projeto', id)
}

const deleteProject = (id: number) => {
  console.log('Excluir projeto', id)
}
</script>

<style>
.playground {
  cursor: default;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 150px;
}

.teste {
  display: flex;
}
</style>
