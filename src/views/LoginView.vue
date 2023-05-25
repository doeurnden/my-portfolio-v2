<template>
    <main>
        <div class="container">
            <div class="left-side">
                <h1>Welcome Back Again</h1>
            </div>
            <aside class="right-side">
                <div>
                    <h2>Login</h2>
                    <div class="form">
                        <form>
                            <input type="text" placeholder="username"><br><br>
                            <input type="password" placeholder="password">
                            <p>forget password?</p><br>
                            <div><input type="submit" value="login"></div>
                            <p>sign up?</p>
                            <div>or</div><br>
                            <div>
                                <button>
                                    G o o g l e 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" style="height: 12px; margin-left: 1rem; fill: #1486f8;">
                                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
        </div>
    </main>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');

main{
    height: 98vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e2eaf9;
    // overflow-x: hidden;
   
    .container{
        display: flex;
        width: 80%;
        height: 80%;
        // border-radius: 10px;
        .left-side{
            width: 50%;
            height: 100%;
            border-radius: 10px 0px 0px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            background-color: #1486f8;
            h1{
                font-size: 50px;
                text-shadow: 1px 1px 20px #766363;
                font-family: 'Koulen', cursive;
                text-align: center;
            }
        }
        .right-side{
            width: 50%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0px 10px 10px 0px;;
            div{
                h2{
                    text-align: center;
                    color: #1486f8;
                    font-size: 40px;
                }
                .form{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    form{
                        // width: 100%;
                        input[type=text],input[type=password]{
                            padding: .8rem 7rem .8rem 1rem;
                            border: none;
                            background-color: #efefef;
                            outline-color: #1486f8;
                            border-radius: 5px;
                            // margin: .5rem 1rem;
                        }
                        input[type=submit]{
                            padding: .5rem 2rem;
                            color: #ffffff;
                            background-color: #1486f8;
                            border: none;
                            border-radius: 5px;
                        }
                        input[type=submit]:hover{
                            cursor: pointer;
                        }
                        div{
                            display: flex;
                            justify-content: center;
                        }
                        p{
                            text-align: end;
                            color: #1486f8;
                        }
                        button{
                            padding: .5rem 1rem;
                            color: #1486f8;
                            border: 1px solid #1486f8;
                            border-radius: 5px;
                        }
                        button:hover{
                            cursor: pointer;
                        }
                    }
                }

            }
        }
    }
}
</style>