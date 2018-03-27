<template>
    <Panel title="精品活动" :class="$style.panel">
        <article :class="$style.list">
            <div :class="$style.banner"  v-for="item in items" :key="item.src">
                <router-link :to="{name: home}">
                    <img :src="item.src"/>
                </router-link>
            </div>
        </article>
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
            items:[{
                src:"//img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264"
            },{
                src:"//img12.360buyimg.com/jrpmobile/jfs/t14653/159/1840910093/27778/53ebfb91/5a5c5cc9N28e0dc96.png?width=376&height=264"
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
    .list{
        @include list(row);
        justify-content: space-around;
        .banner{
            width: 50%;
            padding-bottom: 40px;
            img{
                width: 100%;
            }
        }
       
    }
   
}
</style>
