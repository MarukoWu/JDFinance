<template>
    <Panel title="众筹新品" :class="$style.panel">
        <div :class="$style.more">更多尖货 > </div>
        <section :class="$style.content">
            <Slider :items="items" cname="productSlider" :options="options"/>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
    components: {
        Panel,
        Slider,
    },
    data() {
        return {
            items:[{
                href: "home",
                src:"//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421",
            },{
                href: "home",
                src:"//img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421",
            },{
                href: "home",
                src:"//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421",
            },{
                href: "home",
                src:"//img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421",
            }],
            options:{
                slidesPerView: 2.3,
                spaceBetween: 30,
                freeMode: true,
            }
        }
    }
}
</script>

<style lang="scss">
.productSlider{
    .swiper-container{
        box-sizing: border-box;
        padding: 0 24px;
        .swiper-slide{
            max-width: 320px;
            a{
            display: inline-block;
            width: 100%;
               img{
               width: 100%;
               display: block;
               height: 314px;
               border: 1px solid #fafafa;
            }
         }
      }
    }
}
</style>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    position: relative;
    h4{font-weight: 700;}
    .more{
        font-size: 28px;
        color: #999;
        position: absolute;
        top: 40px;
        right: 20px;
        }
}
</style>
