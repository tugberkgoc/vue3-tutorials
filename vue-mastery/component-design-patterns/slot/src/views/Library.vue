<template>
  <main>
    <Book>
      <template v-slot:title="slotProps">
        <h1>{{ slotProps.bookTitle }}</h1>
      </template>
    </Book>

    <Book>
      <template v-slot:title="{ bookTitle }">
        <h1>{{ bookTitle }}</h1>
      </template>
    </Book>

    <Book>
      <template v-slot:title="{ bookTitle }">
        <h1>{{ bookTitle }}</h1>
      </template>

      <template v-slot:description>
        <p>My Description</p>
      </template>
    </Book>
  </main>
</template>
<script>
import Book from '../components/Book'

export default {
  components: {
    Book
  }
}
</script>
