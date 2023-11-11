<template>
  <button :class="props.size">
    <img v-if="props.iconImg && props.iconPosition === 'before'" :src="getImageUrl(props.iconImg)" :alt="props.text">
    <span>{{ props.text }}</span>
    <img v-if="props.iconImg && props.iconPosition === 'after'" :src="getImageUrl(props.iconImg)" :alt="props.text">
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

// 動態取得圖片路徑
const getImageUrl = (name: String): string => {
  const assets: any = import.meta.glob('~/assets/images/button/*', { eager: true, import: 'default' });
  return assets[`/assets/images/button/${name}`];
};

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
