<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
const books = ref([]);

const fetchBooks = async () => {
  const response = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query{
                books{
                  title
                  author
                }
              }`,
    }),
  });
  const { data } = await response.json();
  books.value = data.books;
};

fetchBooks();

</script>

<template>
  <!--
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  -->
  <h1>Fetchを利用したGraphQLへのアクセス</h1>
  <ul>
    <li v-for="(book, index) in books" :key="index">
      {{ book.title}}/{{ book.author }}
    </li>
  </ul>
</template>

<!--
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

-->