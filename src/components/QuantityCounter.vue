<template>
    <div id="main">
        <button v-on:click="decrement()">-</button>
        &ensp; {{ counter }} &ensp;
        <button v-on:click="increment()">+</button>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        decrement: function() {
            if (this.counter <= 0) {
                this.counter = 0
            } else {
                this.counter--
            }
            this.$emit('counter', this.item, this.counter)
        },
        increment: function() {
            if (this.counter >= 10) {
                alert("You cannot buy more than 10 items.")
                this.counter = 10
            } else {
                this.counter++
            }
            this.$emit('counter', this.item, this.counter)
        }
    },
    props:{
        item:{
            type: Object
        }
    }
}
</script>

<style scoped>
    .main {
        display:flex;
    }
    button{
        font-family: 'Avenir', Arial, Helvetica, sans-serif;
        text-align: center;
        background-color: pink;
    }
</style>