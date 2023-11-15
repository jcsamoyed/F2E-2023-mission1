<template>
  <nav>
    <div class="container">
      <div class="nav-wrapper">
        <NuxtLink to="/" title="首頁">
          <img src="@/assets/images/navbar/logo.png" alt="黑新星">
        </NuxtLink>

        <!-- Desktop -->
        <div class="nav-content">
          <Button text="小額捐款" icon-position="before" icon-img="hand-coins.svg" @click="scrollToId('small-donations')" />
          <ul class="nav-list">
            <li v-for="item in navList" :key="item.id" class="nav-item" @click="scrollToId(item.id)">
              {{ item.name }}
            </li>
          </ul>
        </div>
        <ul class="social-media-wrapper">
          <li v-for="item in socialMediaList" :key="item.name">
            <NuxtLink :to="item.link" target="_blank" :title="item.name">
              <img :src="getImagePath(`/assets/images/navbar/${item.logo}`)" :alt="item.name">
            </NuxtLink>
          </li>
        </ul>

        <!-- Hamburger -->
        <img
          src="@/assets/images/navbar/hamburger.svg"
          alt="漢堡選單"
          class="hamburger"
          @click="isShowSidebar = !isShowSidebar"
        >
      </div>

      <!-- Mobile -->
      <div class="sidebar-wrapper" :class="{ open: isShowSidebar }" @click.self="handleCloseSidebar">
        <div class="sidebar-block">
          <NuxtLink to="/" title="首頁">
            <img src="@/assets/images/navbar/logo.png" alt="黑新星">
          </NuxtLink>
          <div class="nav-content">
            <Button text="小額捐款" icon-position="before" icon-img="hand-coins.svg" @click="scrollToId('small-donations')" />
            <ul class="nav-list">
              <li v-for="item in navList" :key="item.id" class="nav-item" @click="scrollToId(item.id)">
                {{ item.name }}
              </li>
            </ul>
          </div>
          <hr>
          <ul class="social-media-wrapper">
            <li v-for="item in socialMediaList" :key="item.name">
              <NuxtLink :to="item.link" target="_blank" :title="item.name">
                <img :src="getImagePath(`/assets/images/navbar/${item.logo}`)" :alt="item.name">
                <span>{{ item.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
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

const socialMediaList = reactive([
  {
    name: 'Facebook',
    logo: 'logo-facebook.svg',
    link: 'https://www.facebook.com/hexschool',
  },
  {
    name: 'Instagram',
    logo: 'logo-instagram.svg',
    link: 'https://www.instagram.com/hexschool/',
  },
  {
    name: 'YouTube',
    logo: 'logo-youtube.svg',
    link: 'https://www.youtube.com/@hexschool',
  },
]);

// 收合選單
const isShowSidebar = ref(false);
const handleCloseSidebar = () => {
  isShowSidebar.value = false;
};

</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $sp3 0;
}

.nav-content {
  display: flex;
  grid-gap: 16px;
}

.nav-list {
  display: flex;
  grid-gap: 24px;
  align-items: center;

  li {
    transition-duration: .3s;
    cursor: pointer;

    &:hover {
      color: $lime5;
    }
  }
}

.social-media-wrapper {
  display: flex;
  grid-gap: $sp3;

  a {
    display: flex;
    align-items: center;
    grid-gap: 4px;
    color: $gray5;
    text-decoration: none;
    transition-duration: .3s;

    &:hover {
      opacity: .5;
    }
  }
}

.sidebar-wrapper {
  display: none;
}

.hamburger {
  display: none;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .nav-content {
    display: none;
  }

  .social-media-wrapper {
    display: none;

  }

  .hamburger {
    display: block;
  }

  .sidebar-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(3px);

    &.open {
      display: block;
    }

    .sidebar-block {
      position: absolute;
      top: 0;
      right: 0;
      width: 60%;
      height: 100vh;
      box-sizing: border-box;
      background-color: #fff;
      padding: $sp4 $sp3;
    }

    .nav-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 32px;
    }

    .nav-list {
      flex-direction: column;
      line-height: 28px;
    }

    .social-media-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

    }

    hr {
      border-top: solid 1px $gray1;
      margin: $sp3 0;
    }
  }
}
</style>
