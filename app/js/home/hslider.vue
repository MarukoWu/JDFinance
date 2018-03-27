<template>
     <section>
        <Slider :items="items" :cname="$style.hslider"/>
        <article :class="$style.list">
            <div :class="$style.item"  v-for="item in enters" :key="item.src">
                <router-link :to="{name: item.href}">
                    <img :src="item.src" :alt="item.title" />
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </article>
    </section>
</template>

<script>
import Slider from "../core/slider.vue";
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items:[{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t18451/50/878004228/45504/75f19292/5aaf9429N263b6b08.jpg?width=750&height=320",
            },{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14923/213/2632132556/32827/e785366c/5aaf9379Nb6c91bfe.jpg?width=750&height=320",
            },{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t17629/166/898097125/49242/b5b977e1/5aaf93fcN5923f55e.jpg?width=750&height=320",
            },{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15640/136/2579376123/39637/6dcc30e2/5aaf93c5N897cd468.jpg?width=750&height=320",
            }],
            enters:[{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                title: "优惠券",
            },{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                title: "领红包",
            },{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                title: "抢钢镚",
            },{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                title: "白条提额",
            }],
        }
    },

}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.hslider{
    margin-top: 120px;
    img{
        width:100%;
    }
  }
.list{
    @include list(row);
    padding-top: 40px;
    padding-bottom: 20px;
    background: #fff;
    justify-content: space-around;
    .item{
        text-align: center;
        img{
            width: 90px;
            height: 90px;
            display: inline-block;
        }
        h4{
            font-size:26px;
            color: #666;
            margin-top: 12px;
        }
     }
    
}

</style>