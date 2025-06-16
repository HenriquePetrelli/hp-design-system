import type { Meta, StoryFn } from "@storybook/vue3";
import Teste from "./Teste.vue";

const meta: Meta = {
  title: "Example/Teste",
  component: Teste,
  argTypes: {
    textProp: {
      control: "text",
      description: "Texto exibido no componente",
      table: {
        category: "Propriedades",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    booleanProp: {
      control: "boolean",
      description: "Valor booleano para o componente",
      table: {
        category: "Propriedades",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    numberProp: {
      control: "number",
      description: "Valor numérico para o componente",
      table: {
        category: "Propriedades",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    rangeProp: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Valor dentro do intervalo definido",
      table: {
        category: "Propriedades",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    radioProp: {
      control: "radio",
      options: ["Option 1", "Option 2", "Option 3"],
      description: "Opção selecionada",
      table: {
        category: "Propriedades",
        type: { summary: "string" },
        defaultValue: { summary: "Option 1" },
      },
    },
    inlineRadioProp: {
      control: "inline-radio",
      options: ["Option 1", "Option 2", "Option 3"],
      description: "Opção selecionada em linha",
      table: {
        category: "Propriedades",
        type: { summary: "string" },
        defaultValue: { summary: "Option 1" },
      },
    },
    checkProp: {
      control: "check",
      options: ["Option 1", "Option 2", "Option 3"],
      description: "Opções selecionadas",
      table: {
        category: "Propriedades",
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    inlineCheckProp: {
      control: "inline-check",
      options: ["Option 1", "Option 2", "Option 3"],
      description: "Opções selecionadas em linha",
      table: {
        category: "Propriedades",
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    selectProp: {
      control: "select",
      options: ["Option 1", "Option 2", "Option 3"],
      description: "Opção selecionada",
      table: {
        category: "Propriedades",
        type: { summary: "string" },
        defaultValue: { summary: "Option 1" },
      },
    },
    multiSelectProp: {
      control: "multi-select",
      options: ["Option 1", "Option 2", "Option 3"],
      description: "Opções selecionadas",
      table: {
        category: "Propriedades",
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    objectProp: {
      control: "object",
      description: "Objeto para o componente",
      table: {
        category: "Propriedades",
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
      },
    },
    arrayProp: {
      control: "object",
      description: "Array para o componente",
      table: {
        category: "Propriedades",
        type: { summary: "array" },
        defaultValue: { summary: "[]" },
      },
    },
    colorProp: {
      control: "color",
      description: "Cor em formato hexadecimal, rgb ou nome da cor",
      table: {
        category: "Propriedades",
        type: { summary: "string" },
        defaultValue: { summary: "#000000" },
      },
    },
    dateProp: {
      control: "date",
      description: "Data no formato ISO",
      table: {
        category: "Propriedades",
        type: { summary: "string" },
        defaultValue: { summary: new Date().toISOString().substr(0, 10) },
      },
    },
    fileProp: {
      control: "file",
      description: "Arquivo selecionado",
      table: {
        category: "Propriedades",
        type: { summary: "File" },
        defaultValue: { summary: "null" },
      },
    },
  },
};

export default meta;

const Template: StoryFn<{
  textProp: string;
  booleanProp: boolean;
  numberProp: number;
  rangeProp: number;
  radioProp: string;
  inlineRadioProp: string;
  checkProp: string[];
  inlineCheckProp: string[];
  selectProp: string;
  multiSelectProp: string[];
  objectProp: Record<string, any>;
  arrayProp: any[];
  colorProp: string;
  dateProp: string;
  fileProp: File | null;
}> = (args) => ({
  components: { Teste },
  setup() {
    return { args };
  },
  template: '<Teste v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  textProp: "Hello Storybook",
  booleanProp: true,
  numberProp: 42,
  rangeProp: 50,
  radioProp: "Option 1",
  inlineRadioProp: "Option 1",
  checkProp: ["Option 1", "Option 3"],
  inlineCheckProp: ["Option 1", "Option 3"],
  selectProp: "Option 2",
  multiSelectProp: ["Option 1", "Option 2"],
  objectProp: { key1: "value1", key2: "value2" },
  arrayProp: ["Item 1", "Item 2"],
  colorProp: "#ff00ff",
  dateProp: new Date().toISOString().substr(0, 10),
  fileProp: null,
};

export const Secondary = Template.bind({});
Secondary.args = {
  textProp: "Secondary Story",
  booleanProp: false,
  numberProp: 24,
  rangeProp: 25,
  radioProp: "Option 2",
  inlineRadioProp: "Option 2",
  checkProp: ["Option 2"],
  inlineCheckProp: ["Option 2"],
  selectProp: "Option 1",
  multiSelectProp: ["Option 2", "Option 3"],
  objectProp: { keyA: "valueA", keyB: "valueB" },
  arrayProp: ["Item A", "Item B"],
  colorProp: "#00ff00",
  dateProp: new Date().toISOString().substr(0, 10),
  fileProp: null,
};
