<template>
<div>
  <div class="container">
      <div class="h_title">
        <span>关于我们</span>
      </div>
      <p class="aboutUsInfo">
        邦邦留学成立于2002年，由中美文化商业精英携手共建，一直致力于为华人世界的莘莘学子提供高质量的海外留学申请，拥有超过1500名员工，超过1000名咨询顾问。
      </p>
      <p class="aboutUsInfo">北京新东方作为新东方的发源地，也是新东方的第一家培训学校，在北京拥有近70余个校区。5000名教职工，设有近1000种课程。精准的课件教研，严格的老师筛选制度保障新东方培训质量，使学员的成绩与能力能够获得双重提升。</p>
      <p class="aboutUsInfo">新东方教师行为准则：</p>
      <ul class="aboutUsList">
        <li class="aboutUsItem">
          <img src="../assets/img/about-us-0.png" alt="">
        </li>
        <li class="aboutUsItem">
          <img src="../assets/img/about-us-0.png" alt="">
        </li>
        <li class="aboutUsItem">
          <img src="../assets/img/about-us-0.png" alt="">
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="left_title">什么是优质工作室</div>
      <ul class="studioQualityList">
        <li class="listItem">
          <i class="icon"></i>
          <span class="listItemInfo">曾在知名机构服务过3年以上</span>
        </li>
        <li class="listItem">
          <i class="icon"></i>
          <span class="listItemInfo">有营业执照</span>
        </li>
        <li class="listItem">
          <i class="icon"></i>
          <span class="listItemInfo">提供5个以上高端案例</span>
        </li>
        <li class="listItem">
          <i class="icon"></i>
          <span class="listItemInfo">擅长申请的国家、专业备注</span>
        </li>
        <li class="listItem">
          <i class="icon"></i>
          <span class="listItemInfo">背景核查专业度及行业口碑度</span>
        </li>

      </ul>
    </div>
    <div class="container">
      <div class="left_title">联系我们</div>
      <ul class="contactUsList">
         <p v-for="item in contactUsList" v-bind:key="item" class="contactUsItem" v-text="item"></p>
        <!-- <p class="contactUsItem">业务合作 : 400-234-2345</p>
        <p class="contactUsItem">工作室入驻 : 400-234-2345</p>
        <p class="contactUsItem">留学咨询 : 400-234-2345</p>
        <p class="contactUsItem">投诉及建议邮箱 : 400-234-2345</p>        -->
      </ul>
    </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      studioQualityList: ['曾在知名机构服务过3年以上','有营业执照','提供5个以上高端案例','擅长申请的国家、专业备注','背景核查专业度及行业口碑度'],
      contactUsList: ['客服热线 : 400-234-2345', '业务合作 : 400-234-2345', '工作室入驻 : 400-234-2345',
                    '留学咨询 : 400-234-2345', '投诉及建议邮箱 : 400-234-2345'],

    }
  }
  
}
</script>
<style lang="less" scoped>

</style>
