<template>
  <section id="small-donations">
    <div class="container">
      <div class="row">
        <div class="side-block">
          <div class="head">
            <SectionTitle title="小額捐款" subtitle="Small Donations" />
            <p class="slogan" data-aos="fade-right" data-aos-delay="150">
              您的每筆捐款，<br>
              是每隻毛孩未來的大大動力！
            </p>
          </div>
          <div class="total-block" data-aos="flip-up" data-aos-delay="100">
            <span>目前贊助總金額</span>
            <div class="total-amount">
              {{ totalAmount.toLocaleString() }}
            </div>
          </div>
        </div>
        <ul class="main-block">
          <li v-for="item in donateList" :key="item.name" class="option-box">
            <div class="option-content">
              <div class="head">
                <h4>{{ item.name }}</h4>
                <div class="amount">
                  <template v-if="item.amount">
                    <span>NT$</span>{{ item.amount.toLocaleString() }}
                  </template>
                  <template v-else>
                    自訂贊助金額
                  </template>
                </div>
              </div>
              <div class="footer">
                已有 {{ item.people.toLocaleString() }} 人贊助
              </div>
            </div>
            <img :src="getImagePath(`/assets/images/smallDonations/${item.icon}`)" :alt="item.name">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// 贊助總金額
const totalAmount = ref(987655873);

// 方案內容
const donateList = reactive([
  {
    name: '喵衛星',
    amount: 600,
    people: 9957,
    icon: 'plan-1.svg',
  },
  {
    name: '喵行星',
    amount: 6000,
    people: 2000,
    icon: 'plan-2.svg',
  },
  {
    name: '喵恆星',
    amount: 60000,
    people: 999,
    icon: 'plan-3.svg',
  },
  {
    name: '喵彗星',
    amount: null,
    people: 1200,
    icon: 'plan-4.svg',
  },
]);
</script>

<style lang="scss" scoped>
.side-block {
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .slogan {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    margin-top: 32px;
  }

  .total-block {
    background-color: $gray5;
    color: $lime3;
    padding: $sp3 $sp4;
    border-radius: $sp3;

    span {
      font-size: 20px;
      line-height: 30px;
    }

    .total-amount {
      font-size: 48px;
      font-weight: 700;
      line-height: 72px;
    }
  }
}

.main-block {
  display: flex;
  flex-direction: column;
  grid-column-start: 6;
  grid-column-end: 13;
  grid-gap: 16px;

  .option-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 2px $lime5;
    border-radius: $sp3;
    padding: $sp3 $sp4;
    cursor: pointer;
    transition-duration: .3s;

    &:hover {
      background-color: $gray5;

      .head {
        color: $lime3;
      }

      h4 {
        border-right: solid 1px $lime3;
      }

      .amount {
        span {
          color: #fff;
        }
      }
    }

    .head {
      display: flex;
      align-items: center;
    }

    h4 {
      font-size: 28px;
      font-weight: 700;
      border-right: solid 1px $gray5;
      padding-right: 12px;
      margin-right: 12px;
      transition-duration: .2s;
    }

    .amount {
      font-size: 28px;
      font-weight: 700;
      line-height: 42px;
      transition-duration: .2s;

      span {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: $gray3;
        margin-right: 8px;
        transition-duration: .2s;
      }
    }

    .footer {
      display: inline-block;
      line-height: 26px;
      background-color: $lime2;
      padding: $sp2 $sp3;
      border-radius: $sp2;
      margin-top: 16px;
    }
  }
}

@media (max-width:1024px) {
  .side-block {
    margin-bottom: 32px;

    .slogan {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}

@media (max-width:576px) {
  .side-block {
    .slogan {
      br {
        display: none;
      }
    }
  }

  .main-block {
    .option-box {
      padding: $sp3;
    }

    img {
      display: none;
    }
  }
}
</style>
