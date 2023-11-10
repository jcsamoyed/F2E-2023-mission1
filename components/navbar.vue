<template>
  <nav>
    <div class="container">
      <div class="nav-wrapper">
        <img src="@/assets/images/common/logo.svg" alt="黑新星">
        <ul class="nav-list">
          <li v-for="item in navList" :id="item.id" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const navList = reactive([
  {
    name: '候選主張',
    id: 'candidate-claims',
  },
  {
    name: '最新活動',
    id: 'latest-events',
  },
  {
    name: '政策議題',
    id: 'policy-issues',
  },
  {
    name: '服務信箱',
    id: 'service-mail',
  },
]);
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
}

.nav-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  align-items: center;
}
</style>
