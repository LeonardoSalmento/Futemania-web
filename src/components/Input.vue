<template>
    <input type="text" class="form-control" placeholder="Digite o seu clube" :value="myClub" @keyup="updateMyClub($event.target.value)">
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters({
        myClub: 'getMyClub'
        }),
    methods: mapActions(['updateMyClub'])

}
</script>


<style scoped>

</style>