
<template>
  <div class="c-radio-item">
    <div class="label">
      {{ title }}
    </div>
    <div class="radio-box">
      <div
        :class="{disablesd:!isAllowedClick}"
        class="c-select-radios">
        <span
          v-for="(item, index) in optionList"
          :key="index"
          :class="{acitved: value === item.value}"
          class="c-select-item"
          @click="onClickItem(index,item)">
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  data() {
    return {
      dataValue: this.value,
      oIndex: 0,
    }
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    optionList: {
      type: Array,
      default() {
        return []
      },
    },
    value: {
      type: [String, Number],
      default: 0,
    },
    isAllowedClick: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
  },
  components: {
  },
  created() {
    if (!isEmpty(this.value)) {
      this.dataValue = this.value
    }
  },
  methods: {
    onClickItem(index, item) {
      if (!this.isAllowedClick) {
        return
      }
      this.dataValue = item.value
      this.$emit('onChange', item)
    },
  },
  watch: {
    dataValue(newValue) {
      this.$emit('input', newValue)
    },
    value(newValue) {
      this.dataValue = newValue
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/colors';
@import '~@/assets/scss/mixin';

.c-radio-item{
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
  .radio-box{
    float: right;
  }
}
.c-select-radios {
  line-height:45px;
  @include clearfix;
  span.c-select-item {
    float:left;
    box-sizing: border-box;
    min-width:65px;
    height: 29px;
    padding: 5px;
    margin-left: 8px;
    text-align: center;
    border:1px solid $primary-color;
    font-size: 13px;
    line-height: 20px;
    color: $primary-color;
    &:first-child{
      margin-left: 0;
    }
  }
  span.acitved{
    color:#fff;
    background: $primary-color;
  }
  &.disablesd{
    span.c-select-item{
      color: #fff;
      background-color: #e1e1e1;
    }
  }
}
</style>
