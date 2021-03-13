<template>
  <div id="main">
    MENU:
    <ul>
      <li v-for="item in itemsSelected" :key="item[0]">
        {{ item[0] }} x {{ item[1] }}
      </li>
    </ul>
    <br /><br />
    <div>
      <button class="calc" v-on:click="sendOrder()">Add Order</button> <br />
    </div>
  </div>
</template>

<script>
import database from "../firebase.js";

export default {
  data() {
    return {
      clicked: false,
      subTotal: 0,
      grandTotal: 0,
    };
  },
  props: {
    itemsSelected: {
      type: Array,
    },
    items: {
      type: Array,
    },
  },
  methods: {
    findTotal: function () {
      var curr_sub = 0;
      for (var i = 0; i < this.itemsSelected.length; i++) {
        curr_sub += this.itemsSelected[i][1] * this.itemsSelected[i][2];
      }
      this.subTotal = parseFloat(curr_sub).toFixed(2);
      this.clicked = true;
    },
    sendOrder: function () {
      var orders = [];
      for (var i = 0; i < this.itemsSelected.length; i++) {
        orders.push({
          itemName: this.itemsSelected[i][0],
          itemQty: this.itemsSelected[i][1],
        });
        for (var y = 0; y < this.items.length; y++) {
            if (this.itemsSelected[i][0] == this.items[y].name) {
                this.items.splice(y,1)
            }
        }
      }
      console.log(this.items)
      for (var z = 0; z  < this.items.length; z++) {
        orders.push({
          itemName: this.items[z].name,
          itemQty: 0
        });
      }
      database
        .collection("orders")
        .add({
          order: orders,
        })
        .then(location.reload());
    },
  },
  watch: {
    subTotal: function () {
      this.grandTotal = parseFloat(this.subTotal * 1.07).toFixed(2);
    },
  },
};
</script>

<style scoped>
</style>