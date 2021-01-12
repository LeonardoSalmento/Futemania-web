<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo as notícias do: {{ championship }}</h3>
            </div>
        </div>

        <component :is="currentComponent"></component>

        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu time é: {{ myClub }}</h2>
                </div>
                <div class="col-6">
                    <Input v-model="myClub"/>
                </div>
            </div>
        </div>

    </div>
    
</template>

<script>
    import SectionBanner from './SectionBanner' 
    import Input from './Input.vue'
    
    
export default {
    components: {
        SectionBanner,
        SectionNews: () => import ('./SectionNews.vue'),
        Input
    },
    data(){
        return {
            myClub: 'Futemania'
        }
    },
    props: {
        championship: String,
        currentComponent: String
    }
}
</script>

<style scoped>

</style>