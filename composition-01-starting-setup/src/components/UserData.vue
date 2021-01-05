<template>
  <div>
    <h2>{{ fullname }}</h2>
    <h3>{{ user.age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

export default {
  props: ['firstname', 'lastname'],
  setup (props, context) {
    const fullname = computed(() => {
      return `${props.firstname} ${props.lastname}`
    })

    const user = inject('user')

    setTimeout(() => {
      user.age = 1500 // should not updated, where we injected
    }, 5000)

    console.log(context) // slots, emit, etc.

    context.emit('save-data', 1) // how to write this.$emit

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    return { fullname, user }
  }
}
</script>
