<template>
  <div class="playground">
    <HpThemeSwitcher v-model="value2" style="position: fixed; top: 30px" />
    <!-- <HpToggleSwitch v-model="value" /> -->
    <!-- <HpInputText label="Sua idade" /> -->

    <!-- <HpHeader>
      <template #header-left>
        <HpButtonIcon label="Menu" icon="BE0010" />
      </template>

      <template #header-center>TESTE</template>


      <template #header-right>
        <HpButtonLetter
          hasBackground
          backgroundColor="var(--color-primary)"
          color="#ffffff"
          letter="HP"
          size="sm"
          label="Abrir perfil"
        />
      </template>
    </HpHeader> -->

    <HpDataTable
      :items="users"
      :columns="[
        { key: 'name', label: 'Nome' },
        { key: 'status', label: 'E-mail' },
        { key: 'role', label: 'Perfil' }
      ]"
    >
      <template #cell-status="{ value }">
        <strong
          ><HpText size="sm" color="var(--color-success)">
            {{ value }}
          </HpText></strong
        >
      </template>

      <!-- <template #footer-left>
        <HpText size="lg" color="var(--color-text-primary)">Valor Total</HpText>
      </template> -->

      <template #footer-right>
        <HpText
          style="padding-right: 40px"
          size="lg"
          color="var(--color-text-primary)"
          >R$ 3.000</HpText
        >
      </template>
    </HpDataTable>

    <!-- <HpThemeSwitcher v-model="value2" :hasAnimation="false" /> -->
    <!-- <HpInputRange label="Selecione uma opção" v-model="selectedValue" /> -->

    <!-- <HpDataTable
      title="Usuários"
      :items="users"
      :columns="[
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'E-mail' },
        { key: 'role', label: 'Perfil' }
      ]"
    >
      <template #filters>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <HpText size="lg" color="var(--color-text-primary)"
            >Detalhamento por Benefício</HpText
          >
          <HpInputSelect
            label="status"
            v-model="value1"
            :options="options"
            placeholder="Filtrar por status"
            size="sm"
          ></HpInputSelect>
        </div>
      </template>

      <template #footer-left>
        <HpText size="sm" color="var(--color-text-primary)">Valor Total</HpText>
      </template>

      <template #footer-right>
        <HpText size="sm" color="var(--color-text-primary)">R$ 3.000</HpText>
      </template> -->

    <!-- <template #footer>
        <tr
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <td>
            <HpText size="lg" color="var(--color-text-primary)"
              >Valor Total</HpText
            >
          </td>
          <td>
            <HpText size="lg" color="var(--color-text-primary)"
              >R$ 3.000</HpText
            >
          </td>
        </tr>
      </template> -->
    <!-- </HpDataTable> -->

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
    <!-- 
    <HpDataTable
      style="width: 100%"
      :items="projects"
      :columns="[
        { key: 'name', label: 'Projeto', align: 'left' },
        { key: 'owner', label: 'Responsável', align: 'left' },
        { key: 'status', label: 'Status', align: 'left' }
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
    </HpDataTable> -->

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

    <!-- <HpModal :isOpen="isOpen" title="Editar Colaborador" size="md">
      TESTE
    </HpModal> -->
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
  HpDataTable,
  HpButtonLetter,
  HpInputText,
  HpInputSelect
} from './components/index'
const isOpen = ref(true)

const selectedValue = ref(null)

const value2 = ref(true)
const value1 = ref()

const options = [
  {
    value: 'option1',
    label: 'Opção 1'
  },
  {
    value: 'option2',
    label: 'Opção 2'
  },
  {
    value: 'option3',
    label: 'Opção 3'
  }
]

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
  { id: 1, name: 'Henrique', status: 'henrique@email.com', role: 'Admin' },
  { id: 2, name: 'Maria', status: 'maria@email.com', role: 'User' }
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
