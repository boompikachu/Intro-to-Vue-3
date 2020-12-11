const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 1000, color: "green" },
        { id: 1001, color: "blue" },
      ],
      sizes: [
        { id: 1, letter: "S" },
        { id: 2, letter: "M" },
        { id: 3, letter: "L" },
        { id: 4, letter: "XL" },
      ],
    }
  },
})
