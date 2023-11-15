<template>
  <div class="container">
    <header id="header">
      <div class="cat">
        <img src="@/assets/images/header/cat.png" alt="黑新星">
        <Button text="候選人簡介" icon-img="arrow-right.svg" class="button" />
      </div>
      <div class="background">
        <img src="@/assets/images/header/title.svg" class="title" alt="喵喵權益我帶頭">
        <img src="@/assets/images/header/title-m.svg" class="title mobile" alt="喵喵權益我帶頭">
        <p class="slogan">
          <img src="@/assets/images/header/vote.svg" alt="投票">
          <span>立委請支持</span>
          <img src="@/assets/images/header/no1.svg" alt="一號">
          <span>黑新星</span>
          <img src="@/assets/images/header/vote.svg" alt="投票">
        </p>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  position: relative;
}

.background {
  position: relative;
}

.title {
  display: block;
  width: 100%;
  background-color: $gray2;
  border-radius: $sp3;
  padding: 36.5px;
  box-sizing: border-box;

  &.mobile {
    display: none;
  }
}

.slogan {
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  font-size: 48px;
  font-weight: 700;
  background-color: $gray5;
  color: $lime3;
  display: flex;
  align-items: center;
  grid-gap: 8px;
  padding: 12px 32px;
  border-radius: $sp5;
  box-sizing: border-box;
  word-break: keep-all;
}

.cat {
  position: absolute;
  width: 35%;
  max-width: 450px;
  right: -16px;
  bottom: -16px;
  z-index: 2;

  img {
    width: 100%;
  }

  .button {
    position: absolute;
    left: 12%;
    bottom: 36px;
  }
}

@media (max-width:1024px) {
  .container {
    width: 100%;
  }

  .cat {
    position: relative;
    right: unset;
    bottom: -22px;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;

    .button {
      left: 2.5%;
    }
  }

  .title {
    display: none;

    &.mobile {
      display: block;
      padding: 16px;
    }
  }

  .slogan {
    left: 50%;
    transform: translate(-50%, -50%);
  }

}

@media (max-width:768px) {
  .slogan {
    width: 95%;

    font-size: 24px;
    justify-content: center;
    padding: $sp1 $sp3;

    img {
      width: 32px;
    }
  }
}
</style>
