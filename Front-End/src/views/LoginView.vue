<template>
    <main>
        <div class="container">
            <div class="left-side">
                <img src="../assets/admin1-removebg.png" alt="admin1">
            </div>
            <aside class="right-side">
                <div>
                    <h2>Login</h2>
                    <div class="form">
                        <form>
                            <input type="text" placeholder="username"><br><br>
                            <input type="password" placeholder="password"><br><br>
                            <div><input type="submit" value="login"></div>
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
        width: 50%;
        height: 50%;
        // border-radius: 10px;
        .left-side{
            width: 50%;
            // height: 100%;
            border-radius: 10px 0px 0px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            background-color: #1486f8;
            h1{
                font-size: 50px;
                // text-shadow: 1px 1px 20px #766363;
                font-family: 'Koulen', cursive;
                text-align: center;
                -webkit-text-stroke: 1px #7C7BDD;
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