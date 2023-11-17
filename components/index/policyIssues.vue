<template>
  <section id="policy-issues">
    <div class="container">
      <SectionTitle title="政策議題" subtitle="Policy Issues" />
      <div class="tab-wrapper" data-aos="fade-left">
        <div class="tab-block">
          <div
            v-for="item in tabList"
            :key="item.id"
            class="tab-box"
            :class="{ active: activeTab === item.id }"
            @click="changeActiveTab(item.id)"
          >
            {{ item.tabName }}
          </div>
        </div>
        <div class="tab-content">
          <h3>{{ activeContent.title }}</h3>
          <div class="content-block">
            <div v-for="item in activeContent.contentList" :key="item.title" class="content-box">
              <img :src="getImagePath(`/assets/images/policyIssues/${item.icon}`)" :alt="item.title">
              <h4>{{ item.title }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tabList = reactive([
  {
    id: 'tab1',
    tabName: '寵物醫療保障方案',
    title: '為毛孩子謀福利！推動寵物醫療保障方案',
    contentList: [
      {
        title: '設立寵物醫療基金',
        content: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。',
        icon: 'icon1-1.svg',
      },
      {
        title: '提供醫療補助',
        content: '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。',
        icon: 'icon1-2.svg',
      },
      {
        title: '合作動物醫院',
        content: '目前已有和超過 200 家動物醫院進行初步的合作討論。',
        icon: 'icon1-3.svg',
      },
    ],
  },
  {
    id: 'tab2',
    tabName: '寵物休閒與娛樂場所',
    title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
    contentList: [
      {
        title: '建立寵物公園',
        content: '每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。',
        icon: 'icon2-1.svg',
      },
      {
        title: '推廣寵物友善商家',
        content: '鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。',
        icon: 'icon2-2.svg',
      },
      {
        title: '舉辦寵物活動和工作坊',
        content: '與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。',
        icon: 'icon2-3.svg',
      },
    ],
  },
  {
    id: 'tab3',
    tabName: '推廣寵物飼養教育',
    title: '推廣寵物飼養教育，讓愛更加專業',
    contentList: [
      {
        title: '建立寵物飼養教育中心',
        content: '每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。',
        icon: 'icon3-1.svg',
      },
      {
        title: '推廣寵物飼養課程',
        content: '與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。',
        icon: 'icon3-2.svg',
      },
      {
        title: '製作教育資料',
        content: '出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識',
        icon: 'icon3-3.svg',
      },
    ],
  },
]);

// 切換標籤頁
const activeTab = ref('tab1');

const activeContent = computed(() => {
  const activeIndex = tabList.findIndex((item) => {
    return item.id === activeTab.value;
  });
  return tabList[activeIndex];
});

const changeActiveTab = (id) => {
  activeTab.value = id;
};
</script>

<style lang="scss" scoped>
.tab-wrapper {
  margin-top: 32px;
}

.tab-block {
  display: flex;
}

.tab-box {
  width: calc(100% / 3);
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  padding: 16px;
  border-radius: $sp3 $sp3 0 0;
  cursor: pointer;
  background-color: $lime4;
  transition-duration: .3s;

  &:hover {
    background-color: $lime3;
  }

  &.active {
    background-color: $lime1;
    cursor: default;
  }
}

.tab-content {
  background-color: $lime1;
  padding: $sp4;
  border-radius: 0 0 $sp3 $sp3;

  h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 48px;
    color: $lime5;
    text-align: center;
    margin-bottom: 48px;
  }
}

.content-block {
  display: flex;
  grid-gap: 64px;
}

.content-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 8px;
  width: calc(100% / 3);
  text-align: center;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 35%;
    width: 240px;
    height: 110px;
    background-color: $lime3;
    border-radius: 100%;
    transform: rotate(-15deg) translate(-50%, -50%);
    z-index: -1;
  }

  img {
    width: 128px;
  }

  h4 {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
  }

  p {
    line-height: 28px;
    color: $gray4;
    padding-bottom: 26px;
  }
}

@media (max-width: 992px) {

  .content-block {
    flex-direction: column;
    grid-gap: 32px;
  }

  .content-box {
    width: 100%;
  }
}

@media (max-width:768px) {
  .tab-box {
    font-size: 18px;
    padding: 8px;
  }
}
</style>
