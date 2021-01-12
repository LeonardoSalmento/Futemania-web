<template>
    <input type="text" class="form-control" placeholder="Digite o seu clube" :value="value" @keyup="$emit('input', $event.target.value)">
</template>

<script>
export default {
    props: {
        value: String
    }
}
</script>


<style scoped>

</style>