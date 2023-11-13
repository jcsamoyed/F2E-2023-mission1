<template>
  <section id="service-mail">
    <div class="container">
      <div class="row">
        <div class="side-block">
          <SectionTitle title="服務信箱" subtitle="Service Mail" />
          <h3>您的聲音，我們的行動！</h3>
          <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
        </div>
        <div class="main-block">
          <form>
            <label for="name">
              <div class="label">姓名</div>
              <input id="name" v-model="form.name" type="text">
            </label>
            <label for="email">
              <div class="label">Email</div>
              <input id="email" v-model="form.email" type="email">
            </label>
            <label for="phone">
              <div class="label">電話 / 手機</div>
              <input id="phone" v-model="form.phone" type="tel">
            </label>
            <label for="content">
              <div class="label">對我們的建議</div>
              <textarea id="content" v-model="form.content" type="text" />
            </label>
            <Button text="確認送出" size="large" class="button" />
          </form>
          <img src="@/assets/images/serviceMail/cat.png" class="cat" alt="黑新星">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface FormType {
  name: string;
  email: string;
  phone: string;
  content: string
}

const form = reactive<FormType>({
  name: '',
  email: '',
  phone: '',
  content: '',
});

</script>

<style lang="scss" scoped>
.side-block {
  grid-column-start: 1;
  grid-column-end: 6;

  h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    margin-top: 32px;
  }

  p {
    line-height: 28px;
    margin-top: 16px;
  }
}

.main-block {
  position: relative;
  grid-column-start: 6;
  grid-column-end: 13;
  background-color: $lime1;
  padding: $sp4;
  border-radius: $sp3;
}

label {
  .label {
    line-height: 28px;
    margin-bottom: 8px;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding: $sp3;
    border-radius: $sp2;
    border: solid 2px $gray2;
    box-sizing: border-box;
    margin-bottom: 16px;
    transition-duration: .3s;

    &:focus,
    &:focus-visible {
      outline: none;
      border: solid 2px $gray3;
    }
  }
}

.button {
  margin-top: 48px;
}

.cat {
  position: absolute;
  width: 45%;
  max-width: 297px;
  bottom: 0;
  right: 91%;
  z-index: -1;
}

@media (max-width:1024px) {
  .side-block {
    h3 {
      margin-top: 16px;
    }
  }

  .main-block {
    padding: $sp4 $sp3;
    margin-top: 32px;
  }

  .cat {
    display: none;
  }
}
</style>
