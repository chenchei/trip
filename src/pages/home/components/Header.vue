<template>
    <div class="header">

        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>coding...</div>
        <div class="header-right">city
            <span class="iconfont arrow-icon">&#xe64a;</span></div>
    </div>
</template>

<script>

    export default {
        name: "Header"
    }
</script>

<style scoped lang="stylus">
    @import "~styles/varibles.styl"
    .header {
        display flex
        line-height: .86rem
        background-color: $bgColor;
        color: #fff
    }

    .header-left {
        .64rem;
        float left
    }

    .back-icon {
        text-align: center
        font-size: .4rem
    }

    .header-input {
        flex: 1
        background-color: #fff
        border-radius: .1rem
        margin-top: .12rem
        height: .64rem
        margin-left .2rem
        color: #ccc
        line-height: .64rem
        padding-left: .2rem
    }

    .header-right {
        width: 1.24rem
        float: right
        text-align center
    }

    .arrow-icon {
        margin-left -0.04rem
        font-size .24rem
    }
</style>