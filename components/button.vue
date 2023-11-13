<template>
  <button :class="props.size">
    <img v-if="props.iconImg && props.iconPosition === 'before'" :src="getImagePath(`/assets/images/button/${props.iconImg}`)" :alt="props.text">
    <span>{{ props.text }}</span>
    <img v-if="props.iconImg && props.iconPosition === 'after'" :src="getImagePath(`/assets/images/button/${props.iconImg}`)" :alt="props.text">
  </button>
</template>

<script lang="ts" setup>
// props
const props = defineProps({
  text: { type: String, required: true },
  size: { type: String, default: 'small' },
  iconPosition: { type: String, default: 'after' },
  iconImg: { type: String, default: null },
});
</script>

<style lang="scss" scoped>
button {
  font-family: 'Noto Sans TC', sans-serif;
  background-color: $lime3;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 8px;
  transition-duration: .3s;

  &:hover {
    background-color: $lime4;
  }

  &.small {
    font-size: 16px;
    padding: $sp2 $sp3;
    border-radius: $sp5;
  }

  &.large {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 20px;
    padding: $sp3 $sp4;
    border-radius: $sp3;
  }
}
</style>
