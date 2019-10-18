<template>
  <div class="c-input-item">
    <div class="label">
      {{ title }}
    </div>
    <div class="input-box">
      <input
        ref="input"
        :value="value"
        :maxLength="maxLength"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="inputType"
        :name="name"
        @blur="removeHighlight($event.target)"
        @focus="addHighlight($event.target)"
        @input="updateValue($event.target)"
      />
    </div>
    <div class="btnClearIcon"
      v-show="btnClear"
      @click.stop="clearValue">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isActive: false,
      btnClear: false,
      inputType: this.type
    }
  },
  created(){
  },
  computed: {
    btnPswEyeIsActive() {
      return this.inputType !== 'password'
    },
  },
  props:{
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled:{
      type: Boolean,
      default: false
    },
    maxLength:{
      type: Number,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods:{
    customTrim(x) {
      return x.replace(/\s+/g,'');
    },
    addHighlight(){
      this.isActive = true;
    },
    removeHighlight(){
      this.isActive = false;
    },
    updateValue(target){
      const newValue = this.customTrim(target.value)
      this.$emit('input',newValue)
    },
    clearValue(){
      this.btnClear = false;
      this.$emit('input', '');
    },
    activePwdEye(){
      if (this.btnPswEyeIsActive) {
        this.inputType = 'password'
      } else {
        this.inputType = 'text'
      }
    },
    refreshVfCode(){
      if(this.$refs.vfCode){
        this.$refs.vfCode.src = this.$refs.vfCode.src.replace(/\?v=\w+/,'') + '?v=' + new Date().getTime();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mixin.scss';

.c-input-item{
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
  .input-box{
    overflow: hidden;
    input {
      width: 100%;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      -webkit-appearance: none;
      background-color: transparent;
      font-size: inherit;
      color: inherit;
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      color: #4a4a4a;
      text-align: right;
    }
  }
  .btnClearIcon{
    padding-right: 10px;
    &:after{
      content: '';
      width: 14px;
      height: 14px;
      display: inline-block;
      background: url('../assets/icons/clear.png') center center no-repeat;
      background-size: 14px auto;
    }
    &.active{
      &:after{
        background-color: #2f98ff;
      }
    }
  }
}
input::-webkit-input-placeholder{
  font-size: 14px;
  color: #cccccc;
}
</style>
