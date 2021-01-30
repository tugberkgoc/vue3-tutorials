<template>
  <main>
    <BlogLayout>
      <template v-slot:header>
        <h1>Page Title</h1>
      </template>
      <template #default>
        <!-- You do not need to write default slot name, also can be defined with starting "#" -->
        <p>My page content</p>
      </template>
      <template v-slot:sidebar>
        <ul>
          <li>Bullet #1</li>
          <li>Bullet #2</li>
        </ul>
      </template>
    </BlogLayout>

    <!-- <BlogLayout>
      <template
        v-for="section in layout"
        v-slot:[section.name]
        :key="`blog-section-${section.name}`"
      >
        {{ section.content }}
      </template>
    </BlogLayout> -->

    <!-- You can't use above code in vue3 because of this error "vue/no-v-for-template-key", on the contrary, you can use in vue2 -->
  </main>
</template>
<script>
import BlogLayout from '../layouts/BlogLayout'

export default {
  components: {
    BlogLayout
  },
  setup () {
    // const layout = [
    //   { name: 'header', content: 'My Blog Title' },
    //   { name: 'body', content: 'Main body content' },
    //   { name: 'footer', content: 'Footer contet' }
    // ]

    return {
      // layout
    }
  }
}
</script>
