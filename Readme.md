# AluraFlix - React <img height="20" src="./public/netflix.png">

## Sobre o projeto:

### **- Este projeto de AluraFlix já é muito bem conhecido, onde tratamos de um site de filmes, para que o usuário possa ver os filmes disponíveis e assim conseguir adicionar também seus filmes favoritos!**

## Tecnologias usadas:

**- [Vite.js](https://vitejs.dev/):  Uma ferramenta de construção de aplicações em frameworks JS, que é bastante performática e começa a ser bastante utilizada por este motivo. Neste projeto utilizamos o setup em JavaScript, porém ela ainda sim pode ser desenvolvido em sua versão tipada, o Typescript!**

**- [TailwindCSS](https://tailwindcss.com/docs/installation) com o [PostCSS](https://postcss.org/): Uma biblioteca de código em CSS, refatorado para compilação em JS, feito com a utilização de classes no HTML! Bastante reconhecido por sua facilidade de moldura, e sua reutilização de código!**

---

## Em React...?

Este site está sendo desenvolvido usando algumas das mais novas tecnologias do mercado, para novos desenvolvimentos front-end, e assim melhorar a vida de um dev! Sendo desenvolvido durante o aprendizado de um estudante e entusiasta da área...

## Setup:

### Criação do projeto:

```
npm create vite@latest
```
Escolha as opções, baseadas na sua criação... Podendo ser em Vue.js, Vanilla.js, React, Swelte, e a linguagem de criação tanto em JS em sua base ou tipação de TS

### Inicialização: 

```
cd my-project

npm install
npm run dev
```


### Instação do TailwindCSS:

```
npm install -D tailwindcss
npx tailwindcss init
```

### Dentro do arquivo de ```tailwind.config.js```
``` jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Inicialização dos CSS:

Dentro do TailwindCSS, são utilizados dois arquivos de CSS... Um para inicialização do Tailwind, no projeto nomeado de ```index.css```, e um de saída onde você poderá alterar todas as classes separadamente, utilizada no arquivo de ```App.css```, importado no index.html.

```
npx tailwindcss -i ./src/index.css -o ./dist/App.css --watch
```

## Importação no HTML:

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
---