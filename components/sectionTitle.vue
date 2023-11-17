<template>
  <h2 data-aos="fade-up">
    {{ props.title }}
    <span>{{ props.subtitle }}</span>
  </h2>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
h2 {
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  color: $lime5;

  span {
    display: block;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    margin-top: 8px;
  }
}

@media (max-width: 1024px) {
  h2 {
    margin-bottom: 16px;
  }
}
</style>
