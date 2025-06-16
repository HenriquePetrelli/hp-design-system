# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

hp-design-system/
├── src/
│ ├── components/
│ │ ├── Button.vue
│ │ ├── Checkbox.vue
│ │ └── ... (outros componentes)
│ ├── styles/
│ │ ├── variables.scss # Variáveis globais, como cores
│ │ ├── colors.scss # Tokens de cores para temas claro e escuro
│ │ ├── theme.scss # Mixins e funções para aplicação de temas
│ │ └── global.scss # Estilos globais da biblioteca
│ ├── composables/
│ │ └── useTheme.ts # Composable para gerenciar o estado do tema
│ ├── assets/
│ │ ├── fonts/
│ │ │ └── VarelaRound-Regular.ttf
│ │ └── icons/
│ │ └── ... (ícones SVG)
│ └── main.ts # Arquivo de entrada principal
├── stories/ # Configuração e documentação do Storybook
│ ├── Button.stories.ts
│ ├── Checkbox.stories.ts
│ └── ... (outras histórias)
├── public/ # Arquivos públicos como favicon, imagens etc.
│ └── ...
├── .storybook/ # Configurações do Storybook
│ ├── main.js
│ ├── preview.js
│ └── manager.js
├── dist/ # Saída de build da biblioteca
│ └── ...
├── tests/ # Testes unitários
│ └── ...
├── package.json # Configurações de dependências e scripts
├── tsconfig.json # Configuração do TypeScript
├── vite.config.ts # Configuração do Vite
└── README.md # Documentação do projeto
