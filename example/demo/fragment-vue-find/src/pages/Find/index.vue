<template>
  <div class="za-region za-jifen-card">
    <div class="za-title-common">
      <div class="za-t">
        <h3 class="f38 b pl15">积分商城</h3>
        <!-- <div class="desc f28">我的积分</div> -->
      </div>
      <div class="za-more f20">
        <a>更多</a>
      </div>
    </div>
    <div class="za-jifen-product">
      <div class="za-product-item ">
        <a><img src="../../assets/img/banner/1.png" alt=""/></a>
      </div>
      <div class="za-product-item ">
        <a><img src="../../assets/img/banner/2.png" alt=""/></a>
      </div>
      <div class="za-product-item ">
        <a><img src="../../assets/img/banner/3.png" alt=""/></a>
      </div>
      <div class="za-product-item w-percent-24">
        <a><img src="../../assets/img/banner/4.png" alt=""/></a>
      </div>
      <div class="za-product-item w-percent-24">
        <a><img src="../../assets/img/banner/5.png" alt=""/></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.za-region {
  background-color: #fff;
  padding-bottom: 18px;
  margin-bottom: 8px;
  .za-title-common {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 11px 5px;
  }
  .za-t {
    display: flex;
    line-height: 24px;
    h3 {
      height: 24px;
      padding-left: 8px;
      margin-right: 4px;
      color: #404040;
      font-size: 19px;
    }
    div {
      height: 24px;
      font-size: 14px;
      color: #d0d0d0;
    }
  }
  .za-more {
    position: relative;
    height: 16px;
    line-height: 16px;
    padding: 0 16px 0 9px;
    border: 1px solid #bcbcbc;
    border-radius: 22px;
    color: #909090;
    font-size: 10px;
    &:after {
      position: absolute;
      content: "";
      right: 11px;
      top: 6px;
      width: 4px;
      height: 4px;
      border-top: 1px solid #bcbcbc;
      border-right: 1px solid #bcbcbc;
      -webkit-transform: rotate(45deg) translateY(-35%);
      -ms-transform: rotate(45deg) translateY(-35%);
      transform: rotate(45deg) translateY(-35%);
    }
  }
  .za-jifen-product {
    padding: 0 14px;
    .za-product-item {
      display: inline-block;
      width: 49.13%;
      margin: 0 0 0 2px;
      background: #f7f7f7;
      img {
        display: block;
        width: 100%;
      }
      &.w-percent-24 {
        width: 24.2%;
      }
    }
  }
}
</style>
