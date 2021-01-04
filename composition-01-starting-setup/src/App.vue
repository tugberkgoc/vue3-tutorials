<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>

    <button @click="changeAge">Change Age</button>

    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
import { ref, reactive, isRef, isReactive, toRefs } from 'vue'

export default {
  setup () {
    const userRef = ref({
      name: 'Tugberk',
      age: 23
    })

    const userReactive = reactive({
      name: 'Tugberk',
      age: 23
    })

    console.log(userRef, userReactive)

    setTimeout(() => {
      userReactive.name = 'Tugberk Goc'
      userReactive.age = 24
      // ---------- //
      userRef.value.name = 'Tugberk Goc'
      userRef.value.age = 24
    }, 2000)

    console.log(isRef(userRef), isReactive(userReactive))

    // reactive --> ref
    const userRefs = toRefs(userReactive) // wrappes nested properties into ref
    console.log(userRefs)

    // methods
    const changeAge = () => {
      userReactive.age = 100
    }

    return {
      user: userReactive,
      userRef,

      name: userRefs.name, // REF : reflected (toRefs)
      age: userRefs.age, // REF : reflected (toRefs),

      changeAge
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
