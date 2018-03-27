<template>
    <div>
        <Heador/>
        <Islider/>
        <Ious/>
        <Service/>
        <Footor/>
        <Navbar/>
    </div>
</template>


<script>
import Heador   from "../public/header.vue";
import Islider  from "../ious/islider.vue";
import Ious  from "../ious/ious.vue";
import Iproudct  from "../ious/iproduct.vue";
import Service  from "../ious/service.vue";
import Footor   from "../public/footer.vue";
import Navbar   from "../public/navbar.vue";

export default {
    components:{
        Heador,
        Islider,
        Ious,
        Iproudct,
        Service,
        Footor,
        Navbar,
    },
}
</script>

<style lang="scss">


</style>