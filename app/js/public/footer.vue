<template>
    <Panel :class="$style.panel">
        <article :class="$style.banner">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252">
        </article>
         <article :class="$style.row">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108"/>
                <p>客户端</p>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108"/>
                <p>触屏版</p>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108"/>
                <p>电脑版</p>
            </div>
        </article>
         <article :class="$style.info">
                <h4>Copyright &copy; 2004-2018 京东JD.com 版权所有</h4>
                <h4>投资有风险，购买需谨慎</h4>
                <h4>京东金融平台服务协议</h4>
                <h4>京东金融隐私政策</h4>
        </article>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    @include list;
    background: #f5f5f5;
    color: #999999;
    padding-bottom: 86px;
    &>h4{display: none;}
    .banner{
        width: 100%;
        img{
            width:100% ;
        }
    }
    .row{
        @include list(row);
        min-width: 135px;
        padding-top: 40px;
        margin-bottom: 20px;
        justify-content: space-around;
        .item{
            width: 33.333333%;
            text-align: center;
            img{
                width: 90px;
                height: 90px;
            }
            p{
                font-size: 26px;
                height: 34px;
                line-height: 34px;
                margin-top: 12px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
    .info{
        @include list;
        margin-bottom: 20px;
        &>h4{
            font-size: 24px;
            height:86px;
            line-height:86px;
            text-align: center;
            padding: 24px 0;
            box-sizing: border-box;
            &:before{
              content: "";
              display: block;
              width: 100%;
              height: 1px;
              background: #ddd;
          }
          }
        }
    }

</style>