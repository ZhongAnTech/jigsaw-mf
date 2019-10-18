<template>
  <div class="c-datepicker-item">
    <div class="label">{{title}}</div>
    <div class="datepick-box">
      <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
    </div>
  </div>
</template>

<script>
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'

export default {
  data () {
    return {
      dataValue: '',
      // for Vue 2.0
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },
      option: {
        type: 'day',
        week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        format: 'YYYY-MM-DD',
        placeholder: '请选择日期',
        inputClass: 'hhhhhh',
        inputStyle: {
          'display': 'block',
          'widht': '100%',
          'height': '30px',
          'line-height': '22px',
          'font-size': '16px',
          'color': '#5F5F5F',
          'border': 'none',
          'text-align': 'right',
        },
        color: {
          header: '#12c286',
          headerText: '#fff'
        },
        buttons: {
          ok: '确定',
          cancel: '取消'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: Array,
        default: function _default () {
          return []
        }
      }]
    }
  },
  props: {
    title: {
      type: String,
      default: '出生日期',
    },
    value:  {
      type: String,
      default: '',
    },
  },
  components: {
    'date-picker': myDatepicker
  },
  created() {
    this.dataValue = this.value
  },
  watch: {
    startTime: {
      handler(newVal) {
        this.$emit('input', newVal.time)
      },
      deep: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mixin.scss';

.c-datepicker-item{
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
  .datepick-box{
    overflow: hidden;
    text-align: right;
    color: #c3c3c3;
    line-height: 30px;
  }
}
</style>
