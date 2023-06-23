<template>
    <Navigation/>
    <div class="resume-content">
            <div class="data">
                <div class="work">
                    <h2>Work Experience</h2>
                    <p>Project School (T-Shirt)</p>
                    <p>Project JAVA spring boot(GIC coffee)</p>
                </div>
                <div class="edu">
                    <h2>Eduucation</h2>
                    <p><b>2018-2019:</b> grade 12 got (D)</p>
                    <p><b>2019-2023:</b> Bachelor's Degree at ITC (now year 4)</p>
                </div>
                <div class="skill">
                    <h1>Skills & Expertise</h1>
                    <p>Web development</p>
                    <p>HTML CSS JavaScript</p>
                    <h2>Programming Languages</h2>
                    <p>C/C++, JAVA, PYTHON, PHP</p>
                    <p>Bootstrap Taiwind-CSS</p>
                    <p>github docker basic-linux</p>
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