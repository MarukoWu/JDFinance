<template>
    <Panel :class="$style.panel" title="理财金">
        <section :class="$style.banner">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240"/>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
    components: {
        Panel,
    }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    h4{
        display: none;
    }
    .banner{
        padding-bottom: 40px;
        img{
            width: 100%;
        }
    }
}
</style>
