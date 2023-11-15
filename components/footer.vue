<template>
  <footer>
    <div class="container">
      <div class="footer-block">
        <img src="@/assets/images/footer/logo.png" class="logo" alt="logo">
        <div class="social-media-block">
          <nuxt-link v-for="item in socialMediaList" :key="item.name" :to="item.link" target="_blank">
            <img :src="getImagePath(`/assets/images/footer/${item.logo}`)" :alt="item.name" class="social-media">
          </nuxt-link>
        </div>
        <div class="list-content">
          <div class="list-box">
            <h5>快速連結</h5>
            <ul class="quick-link">
              <li v-for="item in navList" :key="item.name" @click="scrollToId(item.id)">
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="list-box">
            <h5>與我們聯繫</h5>
            <ul>
              <li class="icon">
                <img src="@/assets/images/footer/location.svg" alt="地址">
                <nuxt-link to="https://www.google.com.tw/maps" target="_blank">
                  新星區閃耀大道88號 喵喵大樓3樓
                </nuxt-link>
              </li>
              <li class="icon">
                <img src="@/assets/images/footer/phone.svg" alt="電話">
                <nuxt-link to="tel:(02)888-5678">
                  (02) 888-5678
                </nuxt-link>
              </li>
              <li class="icon">
                <img src="@/assets/images/footer/mail.svg" alt="信箱">
                <nuxt-link to="mailto:supernova.black@gmail.com">
                  supernova.black@gmail.com
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>© 2023 黑新星 Supernova Black 版權所有。</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const navList = reactive([
  {
    name: '首頁',
    id: 'header',
  }, {
    name: '最新活動',
    id: 'latest-events',
  }, {
    name: '政策議題',
    id: 'policy-issues',
  }, {
    name: '小額捐款',
    id: 'small-donations',
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
</script>

<style lang="scss" scoped>
footer {
  background-color: $gray5;
  padding: $sp4 $sp6;
  color: #fff;
}

.footer-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.logo {
  width: 165px;
}

.social-media-block {
  display: none;
}

.list-content {
  display: flex;
  grid-gap: 32px;
}

.list-box {
  h5 {
    line-height: 28px;
    color: $lime3;
    margin-bottom: 16px;
  }

  li {
    line-height: 26px;
    margin-bottom: 4px;
    cursor: pointer;

    &:last-child {
      margin-bottom: unset;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    grid-gap: 4px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
}

p {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 24px;
}

@media (max-width:768px) {
  footer {
    padding: $sp4 $sp3;
  }

  .footer-block {
    flex-direction: column;
  }

  .list-content {
    flex-direction: column;
  }

  .social-media-block {
    display: flex;
    grid-gap: 16px;
    margin: 16px 0;
  }

  .quick-link {
    display: flex;
    grid-gap: 16px;
  }
}
</style>
