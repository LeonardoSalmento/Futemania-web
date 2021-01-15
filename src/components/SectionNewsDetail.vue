<template>
    <section>
        <div class="container">
            <div class="row div-news section-news">
                <div class="col-6">
                    <img :src="require(`../assets/${notice.img}`)" :alt="notice.imgInfo"/>
                </div>
                <div class="col-6">
                    <h2>{{notice.title}}</h2>

                    <p>{{notice.content}}</p>
                    <span>{{formatDate(notice.date)}}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Utils from '../mixins/UtilsMixins'

export default {
    computed: {
        notice() {
            return this.$store.getters.getNewsFromId(this.$route.params.idNews)
        }
    },
    mixins: [Utils],
    beforeRouteEnter: (to, from, next) => {
        let params = to.params;
        if (!(parseInt(params.idNews) > 0)){
            next('/');
        }
        next();
    }
}
</script>

<style scoped>
h2{
    cursor: auto;
}
</style>