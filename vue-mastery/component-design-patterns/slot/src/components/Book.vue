<template>
  <div class="book">
    <slot name="title" :bookTitle="bookTitle" />
    <slot name="description" />
  </div>
</template>
<script>
export default {
  setup () {
    const bookTitle = 'Child Providing Data'

    return {
      bookTitle
    }
  }
}
</script>
