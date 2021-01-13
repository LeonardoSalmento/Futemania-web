<template>
    <div>
        <section>
            <div class="container">
                <SectionNewsItem 
                    v-for="notice in news"
                    :key=notice.id
                    :img-name="notice.img"
                    :img-info="notice.imgInfo"
                    :news-title="notice.title"
                    :news-date="notice.date"
                > 
                    <p>{{ notice.content | truncate(200) }}</p>
                </SectionNewsItem>
            </div>
        </section>
    </div>
</template>

<script>
import SectionNewsItem from './SectionNewsItem'
import { mapGetters } from 'vuex'

export default {
    components:{
        SectionNewsItem
        },
        data () {
            return {
                
            }
        },
        computed: {
            ...mapGetters({
                news: 'getNews'
            })
        }
}
</script>

<style scoped>
section{
    padding: 50px 0;
    margin-top: 25px;
    background-color: #006633;
}
</style>