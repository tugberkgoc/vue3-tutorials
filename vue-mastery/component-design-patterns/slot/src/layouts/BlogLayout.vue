<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="default"></slot>
      <!-- You do not need to define as default, it's automatically default -->
    </main>
    <footer>
      <slot name="sidebar"></slot>
    </footer>
  </div>
</template>
<script>
export default {}
</script>
