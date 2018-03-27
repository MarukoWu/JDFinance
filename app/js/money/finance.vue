<template>
     <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content" v-for="item in items" :key="item.src">
            <article>
                <img :src="item.src">
                <div :class="$style.info">
                        <p>{{item.title}}</p>
                        <p>{{item.desc}}</p>
                </div>
            </article>
            <router-link :to="{name : 'home'}">
                    <p>去赚钱<em>></em></p>
            </router-link>
         </section>
     </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
       Panel, 
    },
    data() {
        return{
            items:[{
                src:"//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76",
                title: "月度理财",
                desc: "预期年化收益率4.50%",
            },{
                src:"//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76",
                title: "季度理财",
                desc: "历史年化回报率5.50%",
            },{
                src:"//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76",
                title: "一年理财",
                desc: "历史年化回报率5.80%",
            }]
        }
    }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    >h4{font-weight: 700;
      border-bottom: 1px solid #eee;}
    .content{
        @include list(row);
        justify-content: space-between;
        height: 140px;
        align-items: center;
        &:after{
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            background: #eee;
            margin-left:140px;}
        &:last-child:after{
            background: #fff;
        }
        article{
            @include list(row);
            align-items: center;
            img{
                width: 88px;
                height: 88px;
                display: inline-block;
                margin: 0 32px ;
                }
                .info{
                    max-width: 35%;
                    height: 88px;
                    line-height: 88px;
                    P{
                    &:nth-child(1){
                        font-size: 32px;
                        color: #333;
                        line-height: 1.8;
                        }
                    &:nth-child(2){
                        font-size: 24px;
                        color: #ff3232;
                        line-height: 1.1;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        }
                    }
                }
        }
        a{
            p{
            font-size: 28px;
            color: #FF801A;
            height: 88px;
            line-height: 88px;
            padding-right:40px; 
            em{
                color:rgb(231, 227, 227);
                font-size: 36px;
                padding-left: 10px;
              }
            }
        }
    }
}

</style>



