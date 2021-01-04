<template>
  <div>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggleGoalVisibility">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <h3 v-if="goalIsVisible">{{ courseGoal }}</h3>
    <!-- => Ref Object -->
    <h3 v-if="courseDataRef.goalVisibility">{{ courseDataRef.goal }}</h3>
    <!-- => Reactive Object -->
    <h3 v-if="courseDataReactive.goalVisibility">
      {{ courseDataReactive.goal }}
    </h3>
    <!-- Task 4: Also solve the assignment with the Options API -->
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup () {
    const courseGoal = 'Finish the course'
    const goalIsVisible = ref(false)

    const courseDataRef = ref({
      goal: 'Finish the course',
      goalVisibility: false
    })

    const courseDataReactive = reactive({
      goal: 'Finish the course',
      goalVisibility: false
    })

    const toggleGoalVisibility = () => {
      goalIsVisible.value = !goalIsVisible.value
      // ------------ //
      courseDataRef.value.goalVisibility = !courseDataRef.value.goalVisibility
      // ------------ //
      courseDataReactive.goalVisibility = !courseDataReactive.goalVisibility
    }

    return {
      courseGoal,
      goalIsVisible,

      courseDataRef,

      courseDataReactive,

      toggleGoalVisibility
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
