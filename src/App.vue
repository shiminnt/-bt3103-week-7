<template>
  <div id="app">
    <h1 class="head">Yumyumfoods</h1>
    <nav>
      <div id="routes"><router-link to="/" exact>Home</router-link></div>
      <div id="routes"><router-link to="/orders" exact>Orders</router-link></div>
      <div id="routes"><router-link to="/dashboard" exact>Dashboard</router-link></div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      itemsList: [
        {
          id: "#000",
          name: "Prawn omelette",
          imageURL:
            "https://3.bp.blogspot.com/-SMxoySoXcK0/T696enjIijI/AAAAAAAACoc/A5bFWd024KY/s1600/IMG_5140.JPG",
          price: 5,
        },
        {
          id: "#025",
          name: "Dry Beef Hor Fun",
          imageURL:
            "https://delishar.com/wp-content/uploads/2016/04/Dry-Beef-Hor-Fun-3.jpg",
          price: 15,
        },
        {
          id: "#067",
          name: "Sambal KangKung",
          imageURL:
            "https://minikitchenlab.com/wp-content/uploads/2017/09/Kangkung-Belacan-e1506580822679-1300x1300.jpg",
          show: false,
          price: 10,
        },
        {
          id: "#077",
          name: "Pork Fried Rice",
          imageURL:
            "https://hazeldiary.com/wp-content/uploads/2020/08/King-of-Fried-Rice-Golden-Mile-Tower-XO-Fried-Rice.jpg",
          show: false,
          price: 6,
        },
        {
          id: "#099",
          name: "Mapo Tofu",
          imageURL:
            "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Mapo-Tofu-12-minijpg.jpg?fit=1000%2C1500&ssl=1",
          show: false,
          price: 10,
        },
        {
          id: "#200",
          name: "Cereal Prawn",
          imageURL:
            "https://i.pinimg.com/originals/ad/87/eb/ad87eb2113e4d6480a21acdbb5f36114.jpg",
          show: false,
          price: 12,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.head {
  background-color: pink;
}

#routes {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
