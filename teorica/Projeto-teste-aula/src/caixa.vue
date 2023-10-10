<template>
    <div class="caixa" v-if="contador < 6">
        <p>Caixa do '{{ nome }}'</p>
    </div>
    <div class="caixa-2" v-if="contador < 6">
        <p> Contador: {{ contador }}</p>
        <button @click="incrementa">
            incrementar
        </button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            contador: 1,
            nome: "Murilo"
        }
    },
    methods: {
      incrementa(){
        this.contador ++
      }  
    },
}
</script>
<style>
    .caixa-2{
        width: 200px;
        border: 2px dotted green;
        padding: 2px;
        margin-top: 5px;
    }
    .caixa{
        width: 200px;
        border: 2px dotted black;
        padding: 2px;
        margin-top: 5px;

    }
</style>