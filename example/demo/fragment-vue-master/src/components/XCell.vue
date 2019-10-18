<template>
  <div class="c-cell-item">
    <div class="label">
      {{ title }}
    </div>
    <div class="cell-box">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  created(){
  },
  computed: {
  },
  props:{
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mixin.scss';

.c-cell-item{
  height: 50px;
  padding: 10px 15px;
  @include vux-1px-b;
  .label{
    float: left;
    width: 80px;
    margin-right: 15px;
    text-align: left;
    line-height: 30px;
    font-size: 15px;
  }
  .cell-box{
    overflow: hidden;
    text-align: right;
    color: #c3c3c3;
    line-height: 30px;
  }
}
</style>
