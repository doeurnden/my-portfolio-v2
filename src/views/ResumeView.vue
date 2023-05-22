<template>
    <Navigation/>
    <div class="resume-content">
            <div class="data">
                <div class="work">
                    <h2>Work Experience</h2>
                    <p>None</p>
                </div>
                <div class="edu">
                    <h2>Eduucation</h2>
                    <p><b>2018-2019:</b> grade 12 got (D)</p>
                    <p><b>2019-2023:</b> Bachelor's Degree at ITC (now year 4)</p>
                </div>
                <div class="skill">
                    <h1>Skills & Expertise</h1>
                    <h2>Programming Languages</h2>
                    <p>C/C++ 50%</p>
                    <p>Java 45%</p>
                    <p>Javascript 60%</p>
                    <p>PHP 10%</p>
                </div>
            </div>
       </div>
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
.resume-content{
    display: flex;
    justify-content: center;
    align-items: center ;
    text-align: center;
    height: 90vh;
}
</style>