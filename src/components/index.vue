<template>
  <div>
    <div class="float-weixin">
      <div>
        <img src="../assets/img/weixin.png" />
      </div>
      <div>
        <img src="../assets/img/weixin_.png" />
      </div>
      <div>
        <img src="../assets/img/consult-tel .png" />
      </div>
    </div>
    <Carousel v-model="carouselValue" menu :autoplay="carouselSetting.autoplay" :autoplay-speed="carouselSetting.autoplaySpeed" :dots="carouselSetting.dots" :trigger="carouselSetting.trigger" :arrow="carouselSetting.arrow">
      <Carousel-item v-for="image in carouselSetting.img" v-bind:key="image">
        <img :src="image" />
      </Carousel-item>
    </Carousel>
    <div class="container" id="servicefeature">
      <div class="h_title">
        <span>服务特色</span>
      </div>
      <div>
        <img src="../assets/img/service-features.png" />
      </div>
    </div>
    <div class="container" id="serviceprocess">
      <div class="h_title">
        <span>服务流程</span>
      </div>
      <div>
        <img src="../assets/img/service-process.png" />
      </div>
    </div>
    <div class="container" id="aboutus">
      <div class="h_title">
        <span>关于我们</span>
      </div>
      <p class="aboutUsInfo">
        新东方，1993年11月16日成立，于2006年9月7日在美国纽约证券交易所成功上市，成为中国大陆在美国上市的教育培训机构，截止2015年5月31日，新东方已经在全国20余座城市设立了60余所学校，31家书店以及800多个学习中心，自成立以来，新东方累计面授学员超过1600万人次。
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
        <li v-for="qualityItem in studioQualityList" v-bind:key="qualityItem" class="studioQualityItem">
          <i class="icon"></i>
          <span class="studioQualityItemInfo" v-text="qualityItem">曾在知名机构服务过3年以上</span>
        </li>
        <!-- <li class="listItem">
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
        </li> -->

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
    <footer></footer>
  </div>
</template>
<script>
// import servicefeature from './servicefeature'
// import serviceprocess from './serviceprocess'
// import aboutus from './aboutus'
export default {
  components: {
    // servicefeature,
    // serviceprocess,
    // aboutus
  },
  data() {
    return {
      carouselValue: 0,
      carouselSetting: {
        img: ['./style/img/carousel.jpg'],
        autoplay: false,
        autoplaySpeed: 2000,
        dots: 'inside',
        trigger: 'click',
        arrow: 'hover'
      },
       studioQualityList: ['曾在知名机构服务过3年以上','有营业执照','提供5个以上高端案例','擅长申请的国家、专业备注','背景核查专业度及行业口碑度'],
      contactUsList: ['客服热线 : 400-234-2345', '业务合作 : 400-234-2345', '工作室入驻 : 400-234-2345',
                    '留学咨询 : 400-234-2345', '投诉及建议邮箱 : 400-234-2345'],
    }
  },
    watch: {
    '$route'(to, from) {
      console.log(to)
    }
  },
}
</script>
<style lang="less" scoped>
@import '../assets/style/index.less';
.test {
  background-image: url("../assets/img/carousel.jpg")
}
</style>


