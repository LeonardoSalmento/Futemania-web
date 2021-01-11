<template>

    <header>
        <div class="container">
            <nav class="navbar navbar-expand">
                <a href="#" class="link navbar-brand mr-auto">
                    <img src="../assets/logo.svg" alt="futemania logo" class="img d-inline-block align-top" id="logo"/> Futemania
                </a>

                <div class="links mr-2">
                    <a href="#" @click.prevent="$emit('change-component', 'home')" class="btn mr-5">Início</a>
                    <a href="#" @click.prevent="$emit('change-component', 'news')" class="btn mr-5">Notícias</a>
                    <a href="#" @click.prevent="$emit('change-component', 'classification')" class="btn mr-5">Classificação</a>
                    <a href="#" @click.prevent="$emit('change-component', 'scorers')" class="btn mr-5">Artilharia/Assistências</a>

                </div>
            </nav>
        </div>
    </header>

</template>

<script>
export default {
    
}
</script>

<style scoped>
header {
background-color: #006633;
}
#logo{
    width: 60px;
    height: 100%;
}
.links{
    display: inline-flex;
}
.link{
    color: #000;
    font-size: 30px;
    font-family: 'Rajdhani';
}
.links a{
    color: #fbfb4b;
}

.links a:focus {
    outline: none !important;
    box-shadow: none !important;
}

</style>