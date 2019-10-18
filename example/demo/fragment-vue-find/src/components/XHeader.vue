<template>
  <div class="m-header-container" v-transfer-dom>
    <div class="m-normal-header vux-1px-b">
      <div class="left-container">
        <div @click="goBack">
          <i class="back" />
        </div>
        <slot name="left"/>
      </div>
      <div class="default-container">
        {{ title }}
        <div
          v-if="!title"
          class="default-slot">
          <slot/>
        </div>
      </div>
      <div class="right-container">
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>


<script>
import TransferDom from '@/directives/transfer-dom'

export default {
  name: 'commonHeaderTitle',
  data() {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  computed:{
  },
  directives: {
    TransferDom,
  },
  methods: {
    goBack() {
      history.back()
    },
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/mixin';

.m-header-container {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;

  .m-index-header,
  .m-normal-header,
  .m-main-header {
    position: relative;
    box-sizing: content-box;
    height: 44px;
    padding: 20px 10px 0;
    .left-container {
      position: absolute;
      left: 10px;
      bottom: 0;
      width: 50px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #64728d;
      &>div {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .back {
          display: block;
          width: 20px;
          height: 20px;
          margin-left: 10px;
          background: url('../assets/icons/back.png') no-repeat scroll center;
          background-size: 20px auto;
        }
      }
    }
    .default-container {
      // width: 100%;
      height: 44px;
      font-size: 17px;
      font-weight: bold;
      text-align: center;
      line-height: 44px;
      padding: 0 50px;
      @include ellipsis;
      .default-slot {
        width: 100%;
        height: 100%;
      }
    }
    .right-container {
      position: absolute;
      right: 10px;
      bottom: 0;
      min-width: 50px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      color: #1D96EB;
    }
  }
  .m-index-header {
    position: absolute;
    top: -64px;
    left: 0;
    right: 0;
    background: #fff;
    // transform: translateY(-100%);
    transform: translate(0);
    transition: all .2s ease-out;
    &.animation{
      // transform: translate(0);
      transform: translateY(100%);
    }
  }
}
</style>
