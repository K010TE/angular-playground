# 🚀 Angular Playground

Este projeto é um pequeno laboratório em Angular 19+ para testar recursos modernos do framework. Ele inclui uma página de boas-vindas com navegação para duas demos:

- **Calculadora** — um componente reativo para operações simples.
- **Lista de Compras** — um app leve para adicionar, marcar e remover itens.

## 🧠 O que este projeto demonstra

- **Roteamento básico** usando `RouterOutlet` e rotas nomeadas.
- **Componentes standalone** com suas próprias importações.
- **Uso de Signals** para gerenciamento de estado local.
- **Formulários** com `FormsModule`.
- **Layouts leves** e experiência de navegação intuitiva.

## 📁 Estrutura principal

- `src/app/app.routes.ts` — configuração das rotas.
- `src/app/welcome/` — página inicial com cards de acesso.
- `src/app/calculadora/` — demonstração da calculadora.
- `src/app/lista-compras/` — demonstração da lista de compras.

## 🚀 Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a aplicação:
   ```bash
   npm start
   ```
3. Abra o navegador em `http://localhost:4200/`.

## 📌 Observações

Este repositório serve como um ambiente de aprendizado e experimentação com o Angular moderno, não como um produto final. O foco é entender a migração para componentes standalone, rotas simples e a prática de sinais reativos.