<template>
  <div class="p-outorder-container">
    <div v-if="!isProcessing">
      <x-header title="出单结果"></x-header >
      <div
        v-if="isOutOrderSuccess"
        class="m-outorder-success">
        <div class="success" />
        <div
          class="title vux-1px-b">您的信息已提交</div>
        <div class="m-outorder-form">
          <p class="p-noData-center">稍后客服人员会与您联系，请保持手机通话畅通</p>
          <div>
            <div class="resultReTitle">
              如有疑问，请致电客服中心：
            </div>
            <div class="resultReTitle">
              <a @click.stop="onCall">4009966388</a>联系处理。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isProcessing"
      class="p-outorder-processing">
      <div class="p-notice">{{ payText }}...<img src="../../assets/img/common/loading.gif"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Outorder',
  data() {
    const { productCode, orderNo, orderSign } = this.$route.query
    return {
      productCode,
      orderNo,
      orderSign,
      policyNo: '',
      extraInfo: [],
      payText: '正在出单，请耐心等待...',
      loopTimes: 0,
      timer: null,
      isProcessing: true,
      issueErrMsg: '',
      isOutOrderSuccess: null, // 投保是否成功
    }
  },
  computed: {
  },
  created() {
    window.document.title = '出单结果'
    this.onCheckPayStatus()
  },
  methods: {
    // 查询支付状态
    onCheckPayStatus() {
      if (this.loopTimes < 9) {
        this.loopTimes = this.loopTimes + 1;
        this.loopCheckStatus()
      }
    },
    // 轮询查询支付状态
    loopCheckStatus() {
      const _this = this;
      if (this.loopTimes < 3) {
        this.timer = setTimeout(() => {
          _this.onCheckPayStatus()
        }, 1000)
      } else {
        this.loopTimes = 0
        clearTimeout(this.timer)
        this.isProcessing = false
        this.isOutOrderSuccess = true
      }
    },
  },
}
</script>

<style lang='scss' scoped>
@import '~@/assets/scss/colors';
@import '~@/assets/scss/mixin';

@keyframes rotateLoading {
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
.p-outorder-container{
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 120px;
  .p-outorder-processing{
    position:absolute;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    z-index: 1;
    text-align: center;
    font-size: 16px;
    color: #707070;
    line-height: 40px;
    .p-notice {
      position: absolute;
      width: 100%;
      height: 40px;
      top: 50%;
      margin:auto;
      transform: translateY(-50%);
      text-align: center;
      img{
        position: absolute;
        top: -90px;
        left: 0;
        right: 0;
        margin: auto;
        height: 70px;
        width: 70px;
        animation: rotateLoading linear 1.5s infinite;
      }
    }
  }
  .m-outorder-success,
  .m-outorder-error{
    width: 100%;
    // padding: 0 15px 15px 15px;
    padding-bottom: 40px;
    >.success,
    >.fail{
      display: block;
      margin:0 auto 15px;
      width: 70px;
      height: 70px;
      background: url("../../assets/img/outorder/success.png") no-repeat scroll center;
      background-size: contain;
    }
    >.fail{
      background: url("../../assets/img/outorder/error.png") no-repeat scroll center;
      background-size:contain;
    }
    >.title{
      font-size: 22px;
      color: $primary-color;
      letter-spacing: 0;
      margin: 25px 30px 10px;
      padding-bottom: 25px;
      text-align: center;
    }
    .m-outorder-form{
      margin: 0px 20px 0 20px;
      padding: 20px 0;
      background-color: #fff;
      text-align: left;
      >p{
        span {
          word-break: keep-all;
          white-space: nowrap;
        }
        font-size: 14px;
        color: #6F7072;
        letter-spacing: 0;
        word-wrap:break-word;
      }
    }
    .m-outorder-btn{
      margin: 30px 20px 0;
      @include primary-submit;
    }
  }
}
.p-noData{
  text-align: left;
  padding: 18px 0 10px 0;
  font-size: 16px;
  word-break: break-all;
}
.p-noData-center {
  text-align: center;
  padding: 18px 0 30px 0;
  font-size: 16px;
  word-break: break-all;
}
.p-noData-div {
  text-align: left;
  padding: 0 0 10px 0;
  font-size: 14px;
  color: #6F7072;
  word-break: break-all;
}
.resultReTitle{
  font-size: 14px;
  line-height: 20px;
  color: #B0B2B3;
  letter-spacing: 0;
  text-align: center;
  a {
    font-size: 14px;
    color: #12c287;
    letter-spacing: 0;
    margin-right: 3px;
  }
}
</style>
