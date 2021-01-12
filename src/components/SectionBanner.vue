<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-5 text-center principal-news">
                        <h2>Veja os últimos resultados do campenonato</h2>
                    </div>
                    <div class="col-5 offset-2 text-center principal-news">
                        <h2>Veja os últimos resultados da copa</h2>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
section {
    margin-top: 25px;
}
.container .row{
    height: 300px;
}
.container .row .col-5:first-child {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('../assets/football.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
}

.container .row .col-5:nth-child(2) {
    background-image: url('../assets/football2.jpg');
    background-size: 100%;
}

h2 {
    margin: 25% 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px;
}
.principal-news {
    cursor: pointer;
}
</style>