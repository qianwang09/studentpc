<template>
    <div>
        <div class="container">
            <div class="caseTitle">
    
                <div class="line"></div>
                <h3>优质案例</h3>
            </div>
            <ul class="caseList">
                <li v-for="cases in caseList" :key="cases.id" class="caseListItem">
                    <div class="casePic">
                        <img :src="cases.logo" alt="">
                    </div>
                    <div class="caseInfo">
                        <h4 @click="toCaseDetail(cases)" v-text="cases.title" class="caseInfoTitle">兰卡斯特大学留学成功经典案例</h4>
                        <p v-text="cases.caseBrief" class="caseInfoCont">在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会在北京医学奖励基金会</p>
                        <div class="caseTime">{{cases.createTime |dateFormat}}</div>
                    </div>
                </li>
    
            </ul>
        </div>
        <footer></footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            webserviceUrl: 'https://test.hh-medic.com/admin-fast/api/list/caseList',
            caseList: [],
            pageNo: 1,
            allLoaded: false,
            pages: 0
        }
    },
    methods: {
        getResult(callback) {
            this.$http.get(this.webserviceUrl, { params: { pageNum: this.pageNo } })
                .then(function (response) {
                    let resultList = response.body.caseList
                    if (resultList && resultList.records.length > 0) {
                        this.caseList = this.caseList.concat(resultList.records);
                        this.pages = resultList.pages
                    }
                    if (callback) {
                        callback();
                    }
                }).catch(function (response) {
                    if (callback) {
                        callback();
                    }
                })
        },
        toPreviousPage() {
            this.$router.go(-1);
        },
        toCaseDetail(cases) {
            this.$router.push({ path: '/casedetail', query: { id: cases.id } })
        },
        loadBottom: function () {
            this.pageNo += 1;   // 每次更迭加载的页数
            if (this.pageNo > this.pages || this.allLoaded) {
                // 当allLoaded = true时上拉加载停止
                this.allLoaded = true
                this.$refs.loadmore.onBottomLoaded()
            } else {
                this.getResult(() => { this.$refs.loadmore.onBottomLoaded(); });
            }
        },
    },
    filters: {
        dateFormat(dt) {
            return dt.substring(0, 10);
        }
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
@import '../assets/style/caselist.less';
</style>


