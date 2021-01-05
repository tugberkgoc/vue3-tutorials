<template>
  <section class="container">
    <div class="container">
      <h1>BEGIN COMPONENT</h1>
      <user-data :firstname="firstname" :lastname="lastname"></user-data>
      <h1>END COMPONENT</h1>
    </div>

    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>

    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>

    <button @click="changeAge">Change Age</button>

    <h3>{{ fullname }}</h3>
    <input type="text" placeholder="First Name" @input="setFirstName" />
    <!-- One-way -->
    <input type="text" placeholder="Last Name" @input="setLastName" />
    <!-- One-way -->

    <h3>{{ fullname }}</h3>
    <input type="text" placeholder="First Name" v-model="firstname" />
    <!-- Two-way -->
    <input type="text" placeholder="Last Name" v-model="lastname" />
    <!-- Two-way -->

    <h3>{{ teamName }}</h3>
    <input type="text" placeholder="Team Name" ref="teamNameInput" />
    <button @click="setTeamName">Set Team Name</button>
  </section>
</template>

<script>
import {
  ref,
  reactive,
  isRef,
  isReactive,
  toRefs,
  computed,
  watch,
  provide
} from 'vue'
import UserData from './components/UserData'

export default {
  components: {
    UserData
  },
  setup () {
    const firstname = ref('')
    const lastname = ref('')

    const fullname = computed(() => {
      return firstname.value + ' ' + lastname.value
    })

    watch(firstname, (newValue, oldValue) => {
      console.log(`Old firstname: ${oldValue}`, `New firstname: ${newValue}`)
    })

    watch([firstname, lastname], function (newValues, oldValues) {
      if (oldValues[1] !== newValues[1]) {
        console.log(
          `Old lastname: ${oldValues[1]}`,
          `New lastname: ${newValues[1]}`
        )
      }
    })

    const userRef = ref({
      name: 'Tugberk',
      age: 23
    })

    const userReactive = reactive({
      name: 'Tugberk',
      age: 23
    })

    provide('user', userReactive) // Provide & Inject

    watch(
      () => userRef.value.age,
      function (newValue) {
        console.log(newValue)
      }
    )

    watch(
      () => userReactive.age,
      function (newValue) {
        console.log(newValue)
      }
    )

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

      userRef.value.age = 100
    }

    const setFirstName = event => {
      firstname.value = event.target.value
    }

    const setLastName = event => {
      lastname.value = event.target.value
    }

    const teamName = ref('')
    const teamNameInput = ref(null)
    const setTeamName = () => {
      teamName.value = teamNameInput.value.value
    }

    return {
      user: userReactive, // REACTIVE
      userRef, // REF

      name: userRefs.name, // toRefs(userReactive)
      age: userRefs.age, // toRefs(userReactive)

      changeAge,

      fullname, // COMPUTED

      setFirstName, // One-way
      setLastName, // One-way

      firstname, // Two-way
      lastname, // Two-way

      teamName, // ref
      teamNameInput, // ref
      setTeamName // ref
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
