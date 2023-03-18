<template>
    <div>
        <h1 class="float-md-start mb-0">GithubRepo Display</h1>
        <nav class="nav nav-masthead justify-content-center float-md-end">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>

        </nav>

    </div>

    <br> <br>
    <div class="box-repo">
        <h2 class="neonText">WANNA SEE MY REPOS???👽</h2>
        <br>

        <router-link to="/tomiwaaborowa/DataTable"> <button class="button-28" role="button">
                SEE MY REPOS</button></router-link>
    </div>
    <br>

    <div v-if="msgError" class="error">{{ msgError }}</div>
    <div v-for="repo in repos" :key="repo.id" class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">{{ repo.name }}</div>
        <div class="card-body">
            <h5 class="card-title">{{ repo.description }}</h5>
            <p class="card-text">Language: {{ repo.language }}</p>
            <a :href="repo.html_url" class="btn btn-primary btn-sm" target="_blank">View
                Repo</a>
        </div>

    </div>
</template>
<script>
import axios from "axios";

export default {

    name: 'RepoList',
    components: {

    },
    data() {
        return {
            repos: [],
            msgError: "",
            reposUrl: 'https://api.github.com/users/tomiwaaborowa/repos',

        }
    },


    methods: {
        getRepos() {
            axios.get(this.reposUrl, this.reposData)
                .then((response) => {
                    console.log(response.data)
                    this.repos = response.data
                })
                .catch((error) => {
                    console.log(error)
                    this.msgError = "Error retrieving data.."
                })

        },

    }
}
</script>






<style> #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: white;
 }

 body {
     background-image: linear-gradient(134.6deg, rgb(154, 49, 95) 15.4%, rgba(116, 16, 124, 1) 74.7%);
     height: 10px;
     padding: 55px;
 }

 .nav-masthead .nav-link {
     color: rgba(255, 255, 255, .5);
     border-bottom: .25rem solid transparent;
     padding: .35rem 0;
     font-weight: 750;
     background-color: transparent;
 }

 .nav-masthead .nav-link:hover,
 .nav-masthead .nav-link:focus {
     border-bottom-color: rgba(255, 255, 255, .25);
 }

 .nav-masthead .nav-link+.nav-link {
     margin-left: 3.5rem;
 }

 .nav-masthead .active {
     color: #fff;
     border-bottom-color: #fff;
 }

 .box-repo {
     border: #fff;
     margin: 250px;
     padding: 50px;
     width: auto;
 }

 .neonText {
     color: #fff;
     text-shadow:
         0 0 7px #fff,
         0 0 15px #fff;
     font-size: 50px;




 }

 .error {
     color: red;
     font-size: 3em;
     font-weight: bold;
 }



 h1 {
     font-size: 4.2rem;
 }




 /* Additional styling */

 h2 {
     font-size: 1.8rem;
 }

 .container {
     margin-top: 20vh;
 }

 body {
     font-size: 18px;
     font-family: "Helvetica Neue", sans-serif;
     background-color: #010a01;
 }

 h1,
 h2 {
     text-align: center;
     text-transform: uppercase;
     font-weight: 400;
 }

 .button-28 {
     appearance: none;
     background-color: transparent;
     border: 2px solid #1A1A1A;
     border-radius: 15px;
     box-sizing: border-box;
     color: #3B3B3B;
     cursor: pointer;
     display: inline-block;
     font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
     font-size: 19px;
     font-weight: 600;
     line-height: normal;
     margin: 0;
     min-height: 60px;
     min-width: 0;
     outline: none;
     padding: 16px 24px;
     text-align: center;
     text-decoration: none;
     transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
     user-select: none;
     -webkit-user-select: none;
     touch-action: manipulation;
     width: 60%;
     will-change: transform;
 }

 .button-28:disabled {
     pointer-events: none;
 }

 .button-28:hover {
     color: #fff;
     background-color: #1A1A1A;
     box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
     transform: translateY(-2px);
 }

 .button-28:active {
     box-shadow: none;
     transform: translateY(0);
 }
</style>
