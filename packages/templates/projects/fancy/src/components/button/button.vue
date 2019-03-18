<template>
  <button class="button" v-on="$listeners" v-text="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button"
    }
  }
}
</script>

<style lang="scss">
.button {
  border: none;
  outline: none;
  color: $white;
  background: $green-1;
  border-radius: 2em;
  letter-spacing: 1px;
  padding: 1em 2em;
  cursor: pointer;
  line-height: 1;
}
</style>
