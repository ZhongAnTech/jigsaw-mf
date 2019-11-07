<template>
  <div class="p-notify-container">
    <x-header title="告知信息"></x-header>
    <div class="question_top">
      <span>重要</span>
      为保证被保人的保险权益在理赔时不受影响，请确认被保人健康状况是否符合投保条件：
    </div>
    <div class="question_text">
      <p>
        投保人应在对所有被保险人健康/职业状况充分了解的基础上履行如实告知义务。投保人承诺完全知晓所有被保险人健康/职业状况，并如实告知。若被保险人健康/职业状况与告知内容不符：
      </p>
      <strong
        >（1）一经发现，本公司将依据法律解除合同。<br />（2）若发生保险事故，本公司不承担赔偿或给付保险金的责任，并将依据法律解除合同，同时根据投保人不如实告知情况不退还保险费。</strong
      ><br />
      投保人确认被保险人是否有以下情况：<br />
      1、
      被保险人过去1年内存在健康异常需要进一步检查或治疗的；在过去2年内被保险人曾经或正在住院的（不包括因分娩、急性呼吸系统感染、急性肠胃炎、急性阑尾炎住院并已痊愈出院）；在过去2年内被保险人曾做过下列检查并发现有异常的情况：肿瘤标志物、病理活检、X线、B超、钼靶、CT、MRI、PET-CT、TCT。<br />
      2、
      被保险人体重指数BMI（BMI=体重的千克数/身高米数的平方，举例：体重80千克、身高1.80米，BMI=80/(1.80*1.80）=24.69）低于18或大于28。<br />
      3. 目前已患有或曾经患有下列疾病：<br />
      （1）常见疾病：糖尿病，高血压（收缩压≥140mmHg和/或舒张压≥90mmHg），心肌缺血，心律失常，心肌炎，脑/椎基底动脉供血不足，甲亢，甲状腺炎，甲状腺结节，支气管扩张，慢性支气管炎，哮喘，肝炎（肝炎病毒携带者），胆管炎，慢性胆囊炎，胆结石，胰腺炎，胃炎，胃/十二指肠溃疡，肠息肉，椎间盘突出症，椎管狭窄，股骨头坏死，类风湿性关节炎，痛风性关节炎，强直性脊柱炎，脊柱侧弯，肾结石，肾炎，肾积水，传导性耳聋，静脉曲张。<br />
      （2）非常见疾病：良性或恶性肿瘤，白血病，淋巴瘤，冠心病/冠状动脉狭窄，心肌梗死，风湿性心脏病，心肌病，心瓣膜病，动脉瘤，心功能不全二级及以上，脑梗死，脑出血/缺血，脑血管畸形，脊髓病变，多发性硬化，重症肌无力，瘫痪，癫痫，帕金森病，阿尔茨海默病，再生障碍性贫血，紫癜，系统性红斑狼疮，肾功能不全，肾病综合症，多囊肾，炎症性肠病（克罗恩病、溃疡性结肠炎），肝硬化，间质性肺病，肺纤维化，肺气肿，慢性阻塞性肺病，肺心病。<br />
      （3）其他疾病：先天性疾病，精神类疾病，法定传染病，职业病。<br />
      4、过去1年内存在下列症状：<br />
      性质不明的肿块/占位/囊肿/息肉/结节/赘生物，反复头痛、晕厥、抽搐、胸痛、紫绀、持续反复发热、进食哽噎或吞咽困难、胸闷、心悸、咯血、反复皮肤粘膜出血、消化道出血、血尿、蛋白尿、淋巴结肿大、浮肿、长期腹痛、腹水、病理性消瘦、酒精中毒、药物中毒、智能障碍、视力/听力明显下降，五官/脊柱/胸廓/四肢缺损、畸形、活动受限或功能障碍。<br />
      5、在过去两年投保、复效其他人寿保险或健康保险时，被拒绝投保、延期、加费或附加条件承保。<br />
      6、16周岁以上被保险人：目前专职或兼职从事属于《高危职业表》中所列种类的职业。<br />
      7、16周岁以上女性被保险人：现在或曾经被诊断高危妊娠（包括妊娠合并高血压/糖尿病/肾脏疾病）、宫外孕、葡萄胎以及被医生建议进一步检查、治疗的。<br />
      8、16周岁以上女性被保险人：现在或曾有乳腺结节/囊肿、卵巢囊肿、阴道不规则出血、子宫内膜增生/异位、宫颈上皮内瘤样病变（CIN）、宫颈炎、阴道炎、盆腔炎、HPV检测阳性、乳头溢液、畸胎瘤、多囊卵巢综合症、子宫肌瘤、子宫腺肌症等疾病或症状。<br />
      9、3岁以下被保险人：出生时体重低于2.5公斤，有早产/窒息/发育迟缓/脑瘫。<br />
    </div>
    <div class="Important_announcement">
      声明：本投保人声明上述内容填写属实，如有隐瞒或告知不实，保险公司有权解除保险合同，对于合同解除前发生的任何事故，保险公司可不承担任何责任。
    </div>
    <div class="c-navbar">
      <div class="left-btn">不符合投保条件</div>
      <div class="right-btn" @click="onRoute">符合投保条件</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.document.title = "告知信息";
  },
  methods: {
    onRoute() {
      this.$router.push({
        name: "insure"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.p-notify-container {
  width: 100%;
  height: 100%;
  padding-bottom: 64px;
  background: #f3f3f3;
  overflow-y: auto;
  -webkit-overflow-scrolling: auto;
  .question_top {
    position: relative;
    padding: 10px 15px;
    font-size: 16px;
    color: #4a4a4a;
    font-weight: 700;
    background: rgba(244, 245, 247, 0.7);
    text-indent: 2.857143rem;
    > span {
      position: absolute;
      text-indent: 0;
      top: 8px;
      left: 12px;
      width: 35px;
      height: 18px;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      color: #fff;
      background: #12c287;
      display: inline-block;
    }
  }
  .question_text {
    white-space: pre-line;
    font-size: 1rem;
    padding: 1.428571rem;
    color: #4a4a4a !important;
    background: #fff;
  }
  .Important_announcement {
    margin-top: 10px;
    padding: 20px;
    font-size: 14px;
    color: #4a4a4a;
    background: #fff;
    font-weight: 700;
  }
  .c-navbar {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    background: #fff;
    padding: 10px 20px;
    box-shadow: 1px 5px 20px 0 rgba(186, 212, 247, 0.5);
    .left-btn,
    .right-btn {
      flex: 1;
      height: 44px;
      line-height: 44px;
      font-size: 16px;
      text-align: center;
      border: 1px solid #c1c1c1;
      border-radius: 5px;
    }
    .left-btn {
      color: #707070;
    }
    .right-btn {
      margin-left: 20px;
      color: #12c287;
      border-color: #12c287;
    }
  }
}
</style>
