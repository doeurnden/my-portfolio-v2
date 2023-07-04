<template>
    <Navigation/>
    <main>
        <header><h1>Projects</h1></header>
        <div class="project">
            <aside class="content">
                <h2>DEN T-SHIRT</h2>
                <p>This is my school project</p>
            </aside>
            <aside class="img">
                <a href="https://www.doeurnden.shop/" target="_blank"><img src="../assets/den-t-shirt.png" alt="den-t-shirt"></a>
            </aside>
        </div>
    </main>
    <Footer1/>
</template>

<script>
import Navigation from '../components/Navigaton.vue'
import Footer1 from '../components/Footer.vue'
export default{
    components:{
        Navigation,
        Footer1,
    }
}
</script>

<style lang="scss" scoped>
main{
    height: 87vh;
    header{
        height: 20%;
        h1{
            text-align: center;
        }
    }
    .project{
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: start;
        .content{
            width: 50%;
            text-align: center;
        }
        .img{
            width: 50%;
            display: flex;
            justify-content: center;
            img{
                width: 50%;
            }
        }
    }
}

</style>