<template>
   <section :class="$style.navbar">
       <ul :class="$style.items">
        <router-link :to="{name :'home'}">
           <li>
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66" alt=""/>
               <p>首页</p>
           </li>
        </router-link>
        <router-link :to="{name :'money'}">
           <li>
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66" alt=""/>
               <p>理财</p>
           </li>
        </router-link>
        <router-link :to="{name :'ious'}">
           <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt=""/>
               <p>白条</p>
           </li>
        </router-link>
        <router-link :to="{name :'home'}">
           <li>
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt=""/>
               <p>我的</p>
           </li>
        </router-link>
       </ul>
   </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.navbar{
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #FFFFFF;
    z-index:100;
    .items{
        @include list(row);
        height: 100px;
        justify-content: space-around;
        box-shadow: 0 -3px 4px rgba(0,0,0,.06);
        a{
            width:25%;
        li{ 
            width:100%;
            text-align:center;
            img{
                width:44px;
                height: 44px;
                margin: 12px auto 6px;
                }
            p{
                font-size: 22px;
                color: #656565;
            }
        }
      }
    }
}
</style>

<style lang="scss">
.router-link-exact-active{
    li{
        p{
            color: red !important; 
        }
    }          
 }
</style>



