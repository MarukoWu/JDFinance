<template>
    <Panel title="精选推荐" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{item.title}} <span>{{item.sub}}</span></dt>
                <dd>{{item.rate}}</dd>
                <dd>{{item.text}}</dd>
            </dl>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                title:"定期理财",
                sub: "90天可质押",
                rate: "5.50%",
                text: "历史年化结算利率",
            },{
                title:"固收理财",
                sub: "理财推荐",
                rate: "5.80%",
                text: "综合年化收益率",
            },{
                title:"基智账户",
                sub: "组合投资",
                rate: "8%-10%",
                text: "止盈年化收益率",
            },{
                title:"小白基金",
                sub: "超短期",
                rate: "5.00%",
                text: "7日年化收益率",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    h4{font-weight: 700;}
    .content{
        @include list(row);
        &:before{
                content: " ";
                display: block;
                width: 100%;
                box-sizing: border-box;
                border-bottom: 2px solid #eee;
                position: relative;
                top: 208px;
              }
        .item{
            width: 50%;
            height: 208px;
            position: relative;
            box-sizing: border-box;
            padding-left: 32px;
            &:nth-child(odd):after{
                content: "";
                position: absolute;
                display: block;
                right: 0;
                top: 40px;
                width: 2px;
                height: 136px;
                background: #eee;
            }
            dt{
                color: #333;
                font-size: 30px;
                height: 42px;
                line-height: 42px;
                margin: 34px 0 16px;
                span{
                    font-size: 22px;
                    height: 34px;
                    line-height: 34px;
                    color: #ff5155;
                    padding: 0 4px;
                    box-sizing: border-box;
                    border: 2px solid #ff5155;
                }
            }
            dd{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
               &:nth-child(2){
                font-weight: 700;
                font-size: 44px;
                height: 58px;
                line-height: 58px;
                color: #ff5155;
                } 
           }
           dd{
              &:nth-child(3){
              font-size: 24px;
              height: 34px;
              line-height: 34px;
              color: #999;
            }   
         }
       }
    }
}

</style>