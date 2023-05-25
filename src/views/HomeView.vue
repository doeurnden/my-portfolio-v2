<template>
    <Navigation />
    <div class="container">
        <div class="img">
            <img src="../assets/den.jpg" alt="den">
        </div>
        <div class="i">
            <div>
                <h1>Hello</h1>
            </div>
            <div class="about">
                <h4>A bit about Me</h4>
                <p>I'm a paragraph. Click here to add your own text <br>
                    and edit me. I’m a great place for you to tell a story <br>
                    and let your users know a little more about you.
                </p>
            </div>
            <div class="circle">
                <router-link to="resume"><button class="resume">Resume</button></router-link>
                <router-link to="project"><button class="project">Projects</button></router-link>
                <router-link to="contact"><button class="contact">Contact</button></router-link>
            </div>
        </div>
    </div>

    <Footer1 />
</template>

<script>
import Navigation from '../components/Navigaton.vue'
import Footer1 from '../components/Footer.vue'
export default {
    components: {
        Navigation,
        Footer1,
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 90vh;

    .img {
        width: 30rem;
        height: 30rem;

        img {
            height: 100%;
            border-radius: 50%;
        }
    }

    .i {
        h1 {
            font-size: 60px;
        }

        .circle {
            button {
                width: 8rem;
                height: 8rem;
                border-radius: 50%;
                margin-right: 1rem;

                a {
                    text-decoration: none;
                    color: black;
                }
            }

            button:hover {
                background-color: #f3f3f3;
            }

            .resume {
                background-color: #eea302;
            }

            .project {
                background-color: #ff3b25;
            }

            .contact {
                background-color: #80d8da;
            }
        }
    }
}</style>