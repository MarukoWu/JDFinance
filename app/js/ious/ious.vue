<template>
     <Panel title="白条福利" :class="$style.panel">
        <section :class="$style.content" v-for="item in items" :key="item.src">
            <img :src="item.src">
            <div :class="$style.info">
                <p>{{item.title}}</p>
                <p>{{item.desc}}</p>
            </div>
            <router-link :to="{name : 'home'}">
                    {{item.link}}<em>></em>
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
                src:"//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120",
                title: "开通白条",
                desc: "送百元礼包",
                link: "立即查看",
            },{
                src:"//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120",
                title: "白条提额",
                desc: "金融app专享提额礼包",
                link: "去提额",
            }]
        }
    }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    h4{font-weight: 700;}
    .content{
        @include list(row);
        height: 140px;
        overflow: hidden;
        flex-grow: 1;
        padding-left: 32px;
        box-sizing: border-box;
        &:before{
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            background: #eee;
        }
        img{
            width: 88px;
            height: 88px;
            display: block;
            margin: 24px 32px 0 0;
            }
        .info{
            max-width: 55%;
            height: 88px;
            line-height: 88px;
            margin: 22px 0 0;
            P{
            &:nth-child(1){
            font-size: 32px;
            color: #333;
            line-height: 1.8;
            }
            &:nth-child(2){
            font-size: 24px;
            color: #999;
            line-height: 1.1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            }
        }
    }
        a{  
            font-size: 28px;
            color: #FF801A;
            height: 88px;
            line-height: 88px;
            margin-top: 26px;
            text-align: right;
            box-sizing: border-box;
            padding-right: 20px;
            flex-grow: 1;
            em{
                color:rgb(231, 227, 227);
                font-size: 36px;
                padding-left: 10px;
            }
            
        }
    }

}
</style>



