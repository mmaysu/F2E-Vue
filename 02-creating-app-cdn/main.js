const { createApp } = Vue; //建立一個 Vue 應用程式

createApp({
  data() {
    return {
      message: "Hello World"
    };
  },
  template: `<p>{{ message }}</p>` //{{message}}可以寫在這裡或HTML
}).mount("#app"); //告訴 Vue 把這個應用掛載到 HTML 中 id 為 app 的元素
