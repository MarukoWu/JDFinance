<template>
    <div>
        <Heador/>
        <Slider/>
        <Money/>
        <Product/>
        <Insure/>
        <Live/>
        <Footor/>
        <Navbar/>
    </div>
</template>


<script>
import Heador from "../public/header.vue";
import Slider from "../home/hslider.vue";
import Money from "../home/money.vue";
import Product from "../home/product.vue";
import Insure from "../home/insure.vue";
import Live from "../home/live.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";

export default {
    components:{
        Heador,
        Slider,
        Money,
        Product,
        Insure,
        Live,
        Footor,
        Navbar,
    },
}
</script>

<style lang="scss">


</style>