<template>
    <div>
        <div v-for="project in getProjInfo()" :key="project" >
            <h1>{{project.name}}</h1>
            <img :src="project.image">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        getProjInfo(){
            return this.$store.state.projects
        }
},
computed: {
    getInfo(){
        return this.$store.dispatch('getInfo')
    }
},
mounted(){
    this.getInfo
}
}
</script>
<style lang="">
    
</style>