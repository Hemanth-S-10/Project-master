
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="'/tel'">Tel </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/cart'">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/mcqc'">MCQ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/mtfc'">MTF</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/asent'">Arrange in order</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/otp'">OTP</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/quiz'">MTF TEST</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/mcq'">MCQ TEST</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/sen'">SENTENCE TEST</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<style src='../node_modules/bootswatch/dist/cosmo/bootstrap.min.css' scoped>
    /* global styles */
</style>




