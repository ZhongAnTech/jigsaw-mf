<template>
  <div class="p-insure-container">
    <x-header  title="信息录入"></x-header >
    <div class="c-group-container">
      <div class="c-group-title vux-1px-b">
        投保人信息
      </div>
      <x-input
        title="投保人姓名"
        name="name"
        v-model="name"
        placeholder="请输入投保人姓名"
        :max="20"/>
      <x-cell
        title="证件类型"
        value="身份证" />
      <x-input
        title="身份证号码"
        name="cardNo"
        v-model="cardNo"
        placeholder="请输入投保人身份证号码"
        :max="18"/>
      <x-date v-model="birthday"/>
      <x-radio
        :option-list="genderList"
        v-model="gender"
        title="性别"/>
      <x-input
        title="手机号码"
        name="mobile"
        v-model="mobile"
        placeholder="请输入投保人手机号码"
        :max="11"/>
      <x-input
        title="邮箱"
        name="email"
        v-model="email"
        placeholder="请输入投保人邮箱"
        :max="50"/>
    </div>

    <div class="c-group-container">
      <div class="c-group-title vux-1px-b">
        被保人信息
      </div>
      <x-radio
        :option-list="relationList"
        v-model="relation"
        title="为谁投保"/>
      <template v-if="relation === '1'">
        <x-cell
          title="姓名" 
          :value="name" />
        <x-cell
          title="证件类型"
          value="身份证" />
        <x-cell
          title="证件号码" 
          :value="cardNo" />
        <x-cell
        title="出生日期"
        :value="birthday" />
        <x-cell
          title="性别" 
          :value="gender|genderFilter" />
        <x-cell
          title="手机号码" 
          :value="mobile" />
        <x-cell
          title="邮箱" 
          :value="email" />
      </template>
      <template v-else>
        <x-input
          title="被保人姓名"
          name="name2"
          placeholder="请输入被保人姓名"
          :max="20"/>
        <x-cell
          title="证件类型" 
          name="cardType2"
          value="身份证" />
        <x-input
          title="身份证号码"
          name="cardNo2"
          placeholder="请输入被保人身份证号码"
          :max="18"/>
        <x-date v-model="birthday2"/>
        <x-radio
          :option-list="genderList"
          v-model="gender2"
          title="性别"/>
        <x-input
          title="手机号码"
          name="mobile"
          placeholder="请输入被保人手机号码"
          :max="11"/>
        <x-input
          title="邮箱"
          name="email"
          placeholder="请输入被保人邮箱"
          :max="50"/>
      </template>
      <x-radio
        :option-list="socialList"
        v-model="social"
        title="有无社保"/>
    </div>

    <div class="c-group-container">
      <div class="c-group-title vux-1px-b">
        受益人信息
      </div>
      <x-cell
        :disabled="true"
        title="受益人类型"
        value="法定受益人" />
    </div>

    <div class="c-navbar">
      <div class="left-btn">￥645</div>
      <div class="right-btn" @click="onRoute">立即投保</div>
    </div>
  </div>
</template>

<script>
import XInput from '@/components/XInput'
import XCell from '@/components/XCell'
import XRadio from '@/components/XRadio'
import XDate from '@/components/XDate'

export default {
  data() {
    return {
      genderList: [
        { name: '男', value: 'Y' },
        { name: '女', value: 'N' },
      ],
      socialList: [
        { name: '有社保', value: 'Y' },
        { name: '无社保', value: 'N' },
      ],
      relationList: [
        { name: '本人', value: '1' },
        { name: '配偶', value: '2' },
        { name: '子女', value: '3' },
      ],
      name: '',
      cardNo: '',
      birthday: '',
      mobile: '',
      email: '',
      gender: 'Y',

      relation: '1',
      name2: '',
      cardNo2: '',
      birthday2: '',
      mobile2: '',
      email2: '',
      gender2: 'Y',
      social: 'Y',

    }
  },
  components: {
    XCell,
    XInput,
    XRadio,
    XDate,
  },
  filters: {
    genderFilter(value) {
      return value === 'Y' ? '男' : '女'
    }
  },
  created() {
    window.document.title = '信息录入'
  },
  methods: {
    onRoute() {
      this.$router.push({
        name: 'outOrder'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.p-insure-container{
  width: 100%;
  height: 100%;
  padding:64px 0 50px;
  background: #f3f3f3;
  overflow-y: auto;
  -webkit-overflow-scrolling: auto;
  .c-group-container{
    background-color: #fff;
    margin-bottom: 15px;
    .c-group-title{
      position: relative;
      height: 50px;
      padding: 13px 0 13px 15px;
      line-height: 24px;
      font-size: 18px!important;
      background-color: #fff;
      color: #292B2D;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        display: inline-block;
        width: 8px;
        height: 5px;
        margin: auto;
        background: #12c287;
      }
    }
  }
  .c-navbar{
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    box-shadow: 1px 5px 20px 0 rgba(186,212,247,.5);
    .left-btn,
    .right-btn{
      flex: 1;
      height: 50px;
      padding: 15px 0;
      line-height: 20px;
      font-size: 16px;
      text-align: center;
    }
    .left-btn {
      color: #12c287;
    }
    .right-btn{
      background: #12c287;
      color: #fff;
    }
  }
}
</style>