# 🚀 Angular 19+ Playground

Este repositório é um laboratório prático e um guia de documentação dedicado ao estudo das arquiteturas e features modernas introduzidas no **Angular 19+**. O foco principal é a transição para um paradigma reativo, de alta performance e livre de módulos legados.

---

## 🧠 Conceitos Arquiteturais Documentados

Durante o desenvolvimento deste laboratório, os seguintes paradigmas foram aplicados e consolidados:

### 1. Standalone Components (Fim do `app.module.ts`)
A partir da versão 19, o framework tornou o `standalone: true` o padrão absoluto e implícito. 
* **O que muda:** Componentes agora são autossuficientes. Eles importam suas próprias dependências (como `FormsModule`) diretamente no decorator `@Component`, eliminando a necessidade de um módulo global gerenciador. Isso aproxima o Angular de bibliotecas modernas e simplifica o fluxo do projeto.

### 2. Reatividade com Signals vs. Zone.js
A transição de variáveis clássicas para **Signals** resolve um gargalo histórico de performance no Angular.
* **O Problema Antigo:** O `Zone.js` monitorava toda a árvore de componentes. Qualquer clique disparava uma checagem global para atualizar a tela.
* **A Solução (Signals):** Ao empacotar o estado em um `signal()`, criamos uma reatividade cirúrgica. Quando atualizamos um valor via `.set()`, o Angular atualiza **apenas** o fragmento exato do HTML (DOM) onde aquele dado é renderizado, sem checar o resto da página.

### 3. Separação de Responsabilidades (Lógica de Negócio vs. Apresentação)
O HTML deve ser declarativo e focado exclusivamente na estrutura. Expressões matemáticas ou condicionais complexas poluem o template e dificultam a manutenção.
* **Abordagem Ideal:** Utilizar Sinais Computados (`computed()`) no TypeScript para avaliar regras (ex: `mostrarResultado = computed(() => this.resultado() !== null);`) e usar o novo Control Flow (`@if`) no HTML apenas para decidir a renderização, mantendo a camada de visualização perfeitamente limpa e delegando a inteligência para a classe.

---

## 📦 Módulo Desenvolvido: Calculadora Reativa

Um componente de calculadora estruturado inteiramente sob o paradigma reativo do Angular moderno, servindo como prova de conceito para os temas estudados.

### Destaques Técnicos da Implementação:
- **Blindagem de Nulos:** Uso de *Type Unions* (`signal<number | null>`) e do operador de coalescência nula (`??`) para tratamento seguro de inputs vazios no TypeScript, evitando o uso problemático do *Non-Null Assertion* (`!`).
- **UX e Acessibilidade:** Submissão do formulário escutando eventos nativos de teclado (tecla Enter) utilizando a diretiva `(ngSubmit)` acoplada ao sistema de Sinais.
- **Novo Control Flow:** Uso da sintaxe `@if` nativa no template, substituindo a antiga e verbosa diretiva `*ngIf`.

---

## 🚀 Como executar este projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Angular CLI](https://angular.dev/tools/cli) (v19+) instalados.
2. Clone este repositório:
```bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
```
3. Acesse a pasta do projeto:
```bash
cd NOME_DO_REPOSITORIO
```
4. Instale as dependências essenciais:
```bash
npm install
```
5. Inicie o servidor de desenvolvimento local:
```bash
ng serve
```
6. Abra o navegador e acesse `http://localhost:4200/`.