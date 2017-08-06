<template>
<div class="container">
    <div class="header">
        <h2 class="title">兰卡斯特大学留学成功经典案例</h2>
        <div class="time">2017-7-23</div>
    </div>
    <div class="personInfo">
        <h3 caseDetail.studyName class="name">王烁明</h3>
        <ul class="personInfoBox">
            <li class="item">
            <span>在读学校：</span><span v-text="caseDetail.studySchool">山东大学</span>
        </li>
            <li class="item">
                <span>在读专业：</span><span v-text="caseDetail.studySchool">山东大学</span>
            </li>
            <li class="item">
                <span>学生条件：</span><span v-text="caseDetail.studyConditions">山东大学</span>
            </li>
            <li class="item">
                <span>签约老师：</span><span v-text="caseDetail.signTeacher">山东大学</span>
            </li>
            <li class="item">
                <span>录取国家：</span><span v-text="caseDetail.enterCountry">山东大学</span>
            </li>
            <li class="item">
                <span>取录学校：</span><span v-text="caseDetail.enterSchool">山东大学</span>
            </li>
            <li class="item">
                <span>录取专业：</span><span v-text="caseDetail.enterSpecialty">山东大学</span>
            </li>

        </ul>
    </div>
    <div class="letter">
        <h3 class="name">录取信</h3>
        <ul class="letterBox clearfix">
            <li  v-for="pic in enterNoticsPics" v-bind:key="pic"><img :src="pic" /></li>
        </ul>
    </div>
    <div class="analysis">
        <h3 class="name">案例解析</h3>
        <p v-text="caseDetail.caseBrief"  class="analysisInfo">在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会</p>
    </div>
</div>


</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      pageTitle: '案例详情',
      caseDetail: {},
      enterNoticsPics: [],
      webserviceUrl: 'https://test.hh-medic.com/admin-fast/api/detail/caseDetail',
      hideAllInfo: true
    }
  },
  computed: {

  },
  methods: {
    getResult() {
      this.$http.get(this.webserviceUrl, { params: this.$route.query })
        .then(function (response) {
          if (response.body.code == '0' && response.body.case) {
            this.caseDetail = response.body.case
            this.enterNoticsPics = this.caseDetail.enterNoticsPics.split(',')
          }
        }).catch(function (response) {
        })
    },
    toPreviousPage() {
      this.$router.go(-1);
    }
  },
  watch: {
    // '$route'(to, from) {
    //   console.log(to)
    // }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.getResult();
    });
  }
}
</script>
<style lang="less" scoped>
@import "../assets/style/casedetail.less";
</style>


