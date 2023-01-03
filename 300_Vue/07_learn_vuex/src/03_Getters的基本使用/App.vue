<template>
  <div class="app">
    <h4>doubleCounter: {{ $store.getters.doubleCounter }}</h4>
    <h4>friendsTotalAge: {{ $store.getters.totalAge }}</h4>
    <h4>message: {{ $store.getters.message }}</h4>

    <!-- 根据id获取某一个朋友的信息 -->
    <h4>id-111的朋友信息: {{ $store.getters.getFriendById(111) }}</h4>
    <h4>id-112的朋友信息: {{ $store.getters.getFriendById(112) }}</h4>
  </div>
</template>