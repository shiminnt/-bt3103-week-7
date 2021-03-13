<template>
  <div id="main">
    <div v-for="item in datapacket" :key="item.id">
      <div v-for="itemorder in item.order" :key="itemorder.id">
        {{ itemorder.itemName }}: {{ itemorder.itemQty }} <br />
        <input
          v-bind:id="itemorder.itemName"
          type="number"
          placeholder=0
          min=0
        />
      </div>
    </div>
    <br />
    <button v-bind:id="update" v-on:click="updateOrder()">Update Order</button>
  </div>
</template>

<script>
import database from "../firebase.js";

export default {
  data() {
    return {
      datapacket: [],
      allitems: [],
    };
  },
  methods: {
    fetchItems: function () {
      database
        .collection("orders")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id == this.$route.params.id) {
              this.datapacket.push(doc.data());
            }
          });
        });
    },
    updateOrder: function () {
      var dup = this.datapacket;
      for (var i = 0; i < this.datapacket[0].order.length; i++) {
        var updatedValue = document.getElementById(
          this.datapacket[0].order[i].itemName
        ).value;
        console.log(updatedValue)
        if (updatedValue == 0) {
          dup[0].order[i].itemQty = 0;
        } else {
          dup[0].order[i].itemQty = parseInt(updatedValue);
        }
      }
      database
        .collection("orders")
        .doc(this.$route.params.id)
        .set(dup[0])
        .then(() => this.$router.push({ path: "/orders" }));
    },
  },
  created: function () {
    this.fetchItems();
  },
};
</script>

<style scoped>
</style>