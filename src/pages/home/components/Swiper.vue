<template>
    <div class="container">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img"
                     :src="item.imgUrl" alt="">
            </swiper-slide>


            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>


        </swiper>
    </div>
</template>


<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption: {
                    pagination: ".swiper-pagination",
                    loop:true
                },
                swiperList: [
                    {
                        id: '001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/56/7e62e24499ad4702.jpg_890x330_dd59942e.jpg'
                    }, {
                        id: '002',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/a8f2967c482dab43478805c235925d36.jpg_890x330_4ec3a9fa.jpg'
                    }, {
                        id: '003',
                        imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/7c/f7653a384258c02.jpg_890x330_d1908fb2.jpg"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    .container >>> .swiper-pagination-bullet-active {
        color: #fff
    }

    .container {
        overflow hidden
        width: 100%
        height: 0
        padding-bottom 36.25%
    }

    .swiper-img {
        width: 100%
    }
</style>