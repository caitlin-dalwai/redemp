<template>
    <div>
        <section class="d-flex justify-content-evenly flex-wrap ">
            <div class="hehe" v-for="project in getProjInfo()" :key="project">
                <!-- <h1>{{project.name}}</h1>
            <img :src="project.image"> -->
                <div class="card" style="width: 300px; height: 250px;" id="spP">
                    <div class="container">
                        <img :src="project.image" class="card-img" alt="project img">

                        <div class="card-img-overlay" id="text">
                            <h5 class="card-title" style="color: black; font-weight: bolder;">{{ project.name }}</h5>
                            <p class="card-text" style="color: white;">{{ project.description }}</p>
                            <span><a :href="project.github" class="btn btn-success" style="color: black;"
                                    target="_blank">GitHub</a> <a :href="project.vercel" class="btn btn-success"
                                    style="color: black;" target="_blank">Vercel</a></span>
                        </div>
                    </div>
                </div>
            </div>


        </section>

    </div>
</template>
<script>
export default {
    methods: {
        getProjInfo() {
            return this.$store.state.projects
        }
    },
    computed: {
        getInfo() {
            return this.$store.dispatch('getInfo')
        }
    },
    mounted() {
        this.getInfo
    }
}
</script>
<style scoped>
#text {
    display: none;
    background-color: #6a7a21cf;
    transition: 5s;

}

.container:hover #text {
    display: block;
}

.hehe{
    flex-basis: 400px;
    margin-top: 1%;
}
</style>