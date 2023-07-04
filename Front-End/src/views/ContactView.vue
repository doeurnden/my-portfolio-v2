<template>
    <Navigation />
    <div class="content">
        <div class="text">
            <div class="text-defualt">
                <div>
                    <h1>Contact</h1>
                    <p>Looking forward to hearing from you</p>
                </div>
                <div>
                    <h3>Phone</h3>
                    <p>(+885) 886700929</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>doeurnden32@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="form">
            <div>
                <form action="#">
                    <div class="row1">
                        <div>
                            <label for="fname">First Name</label><br>
                            <input type="text" name="fnaem" required>
                        </div>
                        <div>
                            <label for="lname">Last Name</label><br>
                            <input type="text" name="lnaem" required>
                        </div>
                    </div>
                    <div class="row2">
                        <div>
                            <label for="email">Email</label><br>
                            <input type="text" name="email" required>
                        </div>
                        <div>
                            <label for="subject">Subject</label><br>
                            <input type="text" name="subject" required>
                        </div>
                    </div>
                    <div class="row3">
                        <div>
                            <label for="message">Message</label><br>
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button type="submit" id="btn">Submit</button>
                        </div>
                    </div>
                </form>
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
.content {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
    .text {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .form {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            form {

                .row1,
                .row2,
                .row3 {
                    display: flex;
                    gap: 2%;

                    div {
                        margin: 10px;

                        input,
                        textarea {
                            margin-top: 0.5rem;
                            padding: 10px;
                        }
                    }
                }

                .row3 {
                    height: 100%;
                    align-items: center;

                    div:nth-child(2) {
                        #btn {
                            cursor: pointer;
                            width: 10rem;
                            height: 10rem;
                            border-radius: 50%;
                            background-color: #eea302;
                        }
                    }
                }
            }
        }

    }
}</style>