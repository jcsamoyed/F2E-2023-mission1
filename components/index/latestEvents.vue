<template>
  <section id="latest-events">
    <div class="container">
      <div class="row">
        <SectionTitle title="最新活動" subtitle="Latest Events" />
        <ul class="event-wrapper">
          <li v-for="item in eventList" :key="item.title">
            <div class="img-block">
              <img :src="getImagePath(`/assets/images/latestEvents/${item.image}`)" :alt="item.title">
            </div>
            <div class="content-block">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
              <div class="footer">
                <span class="date">{{ item.date }}</span>
                <Button text="閱讀更多" icon-img="arrow-right.svg" class="button" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const eventList = reactive([
  {
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    date: '12.26.2023',
    image: 'cover-1.png',
  },
  {
    title: '掃街模式開啟！帶著你的貓耳，和我一起走！',
    content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
    date: '12.24.2023',
    image: 'cover-2.png',
  },
  {
    title: '收容所模特兒大比拼！',
    content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    date: '12.20.2023',
    image: 'cover-3.png',
  },
]);
</script>

<style lang="scss" scoped>
.event-wrapper {
  grid-column-start: 4;
  grid-column-end: 13;
}

li {
  display: flex;
  grid-gap: 16px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: unset;
  }
}

.img-block {
  width: 264px;
  flex-shrink: 0;

  img {
    width: 100%;
  }
}

.content-block {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 8px;

  h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    color: $lime5;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: $gray4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .date {
      line-height: 28px;
      color: $lime5;
    }
  }
}

@media (max-width:992px) {
  li {
    flex-direction: column;
  }

  .img-block {
    width: 100%;
  }

  .content-block {
    width: 100%;
  }
}
</style>
