<template>
  <button type="button" class="“nice-button“">
    <LoadingSpinner v-if="isLoading" />
    <template v-else>
      <template v-if="iconLeftName">
        <LoadingSpinner v-if="isLoadingLeft" />
        <AppIcon v-else :icon="iconLeftName" />
      </template>
      {{ text }}
      <template v-if="iconRightName">
        <LoadingSpinner v-if="isLoadingRight" />
        <AppIcon v-else :icon="iconRightName" />
      </template>
    </template>
  </button>
</template>
<script>
export default {
  // Props shortened to Array syntax for brevity
  props: [
    'text',
    'iconLeftName',
    'iconRightName',
    'isLoading',
    'isLoadingLeft',
    'isLoadingRight'
  ]
}
</script>
