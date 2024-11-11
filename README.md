# Drinks Native

Este é um projeto de estudo em React Native, criado como parte de uma aula onde integramos uma aplicação com a [CocktailDB API](https://www.thecocktaildb.com/api.php) para exibir informações sobre drinks.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [To-do](#to-do)
- [Créditos](#créditos)

---

## Sobre o Projeto

O **Drinks Native** é uma aplicação básica em React Native que permite aos usuários buscar informações sobre drinks. Ela foi desenvolvida com foco em aprendizado e serve como uma base para experimentação e aprimoramento contínuo.

## Funcionalidades

- **Página Home**: Contém um campo de busca e exibe uma lista dos resultados de drinks encontrados.
- **Página de Detalhes**: Ao clicar em um drink da lista, o usuário é redirecionado para uma página de detalhes com informações específicas do drink selecionado.

## Instalação

Clone o projeto

```bash
  git clone https://github.com/gustavoluigi/drinks-native.git
```

Entre no diretório do projeto

```bash
  cd drinks-native
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn start
```

## Como Usar

- Na **página inicial (Home)**, digite o nome de um drink no campo de busca para encontrar resultados.
- Clique em qualquer drink na lista de resultados para ver os **detalhes do drink**.

## Tecnologias Utilizadas

- **React Native**
- **CocktailDB API** (API gratuita de informações sobre drinks)
- **React Navigation** (para navegação entre telas)

## To-do

Abaixo está uma lista de funcionalidades e melhorias planejadas para aprimorar o app:

### Funcionalidades e Usabilidade

- [ ] Filtros de Categoria e Ingredientes (ex.: alcoólico, não-alcoólico)
- [ ] Autocompletar no campo de busca
- [ ] Sistema de Favoritos com armazenamento local
- [ ] Seção de "Drinks Populares"

### Layout e Estilização

- [🛠️] **Integração com Tamagui** para estilização e performance
- [ ] Dark Mode
- [ ] Placeholder e skeleton loaders

### Funcionalidades Avançadas

- [ ] Scroll Infinito para carregamento contínuo de drinks
- [ ] Modo Offline para salvar buscas recentes

### Performance e Organização do Código

- [ ] Gerenciamento de Estado Global com Redux ou Context API
- [ ] Hooks Personalizados para busca e favoritos

### Testes e Qualidade

- [ ] Testes Unitários com Jest
- [ ] Configuração de ESLint e Prettier para boas práticas de código

## Créditos

Este projeto foi baseado em uma aula ministrada por [O Primo Dev](https://www.youtube.com/@OPrimoDev) no YouTube, através da [Aula Zero-To-Hero: React Native](https://www.youtube.com/watch?v=x9Zg90Xo0PY). A aplicação foi modificada e estendida para fins de aprendizado e desenvolvimento pessoal.
