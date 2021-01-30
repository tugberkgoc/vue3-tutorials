<template>
  <section>
    <img :src="require(`@/assets${image}`)" height="500" width="400" />
    <h1>{{ title }}</h1>
    <p>{{ length }}</p>
    <span v-if="watched">✅</span>
  </section>
</template>
<script>
export default {
  name: 'Movie',
  props: {
    image: {
      type: String,
      default: '/images/placeholder.png',
      validator: propValue => {
        const hasImagesDirectory = propValue.indexOf('/images/') > -1 // images live in the images directory
        const isPNG = propValue.endsWith('.png')
        const isJPEG = propValue.endsWith('.jpeg') || propValue.endsWith('.jpg')
        const hasValidExtension = isPNG || isJPEG

        return hasImagesDirectory && hasValidExtension
      }
    },
    title: {
      type: String,
      required: true
    },
    length: {
      type: [Number, String],
      default: 90
    },
    watched: {
      type: Boolean,
      default: false
    }
  }
}
</script>
