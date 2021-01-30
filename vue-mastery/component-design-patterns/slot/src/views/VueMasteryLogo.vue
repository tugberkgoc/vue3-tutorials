<template>
  <main>
    <img
      v-bind="{
        src: imageAttrs.src,
        alt: imageAttrs.alt,
        height: imageAttrs.height,
        width: imageAttrs.width
      }"
    />

    <img v-bind="imageAttrs" v-on="imageEvents" />

    <img v-bind="feedItem('test').attrs" v-on="feedItem('test').events" />
  </main>
</template>
<script>
export default {
  setup () {
    const imageAttrs = {
      src: require('@/assets/images/vue-mastery-logo.png'),
      alt: 'Vue Mastery Logo',
      height: '100',
      width: '100'
    }

    const openGallery = e => {
      console.log(e)
    }

    const showTooltip = () => {
      console.log('mouseover')
    }

    const imageEvents = {
      click: openGallery,
      mouseover: showTooltip
    }

    const feedItem = item => {
      if (item.type === 'NewsArticle') {
        return {
          attrs: {},
          events: {}
        }
      } else {
        return {
          attrs: {
            src: require('@/assets/images/vue-mastery-logo.png'),
            alt: 'Vue Mastery Logo',
            height: '100',
            width: '100'
          },
          events: {
            click: openGallery,
            mouseover: showTooltip
          }
        }
      }
    }

    return {
      imageAttrs,
      imageEvents,
      feedItem
    }
  }
}
</script>
