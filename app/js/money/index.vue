<template>
    <div>
        <Heador/>
        <Mslider/>
        <Bannera/>
        <Money/>
        <Bannerb/>
        <Finance/>
        <Footor/>
        <Navbar/>
    </div>
</template>


<script>
import Heador   from "../public/header.vue";
import Mslider  from "../money/mslider.vue";
import Bannera  from "../money/banner-a.vue";
import Money    from "../money/money.vue";
import Bannerb  from "../money/banner-b.vue";
import Finance  from "../money/finance.vue";
import Footor   from "../public/footer.vue";
import Navbar   from "../public/navbar.vue";

export default {
    components:{
        Heador,
        Mslider,
        Bannera,
        Money,
        Bannerb ,
        Finance,
        Footor,
        Navbar,
    },
}
</script>

<style lang="scss">


</style>