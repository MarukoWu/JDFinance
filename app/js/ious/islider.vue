<template>
    <section>
        <Slider :items="items" :class="$style.islider" />
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
               href:"home",
               src: "//img12.360buyimg.com/jrpmobile/jfs/t16192/335/2551594630/83964/64093ce3/5ab215c6N94e6936b.jpg?width=750&height=320",
           },{
               href:"home",
               src: "//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320",
           }]
       }
   }
}
</script>

<style lang="scss" module>
.islider{
    margin-top: 120px;
    width: 100%;
    img{
        width: 100%;
    }
}

</style>





