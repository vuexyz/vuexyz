<script setup>

</script>

<template>

  <!-- Background Grid (Circle) -->
  <img src="/grid-circle.svg" class="grid-circle" alt="A grid background">

  <!-- Logo -->
  <img src="/logo.png" alt="VueXYZ logo" class="logo">

  <!-- White Page Border -->
  <div class="page-border"/>

  <!-- Example Handwriting -->
  <h2 style="position: absolute; top: 30vh; left: 20vw; transform: rotate(-4deg); max-width: 70vw; line-height: 1.5">Hold tight - we're still building this thing!</h2>

  <!-- Metadata Box (Description + Install Command) -->
  <div class="metadata-box">
    <h1>Creative Coding Composables for Vue 3</h1>
    <div class="install-box">
      <h1>npm install vuexyz</h1>
      <i class="copy-icon fa-sharp fa-solid fa-copy"></i>
    </div>
  </div>

<!-- Shape Icons -->
  <img src="/shape-icons.svg" alt="Icons of various shape functions" class="shape-icons">

  <!-- Nav Links -->
  <ul class="nav-links">
    <li>
      <a href="/getting-started.html"><i class="fa-sharp fa-solid fa-shapes"></i> Demos</a>
    </li>
    <li>
      <a href="/getting-started.html"><i class="fa-sharp fa-solid fa-books"></i> Documentation</a>
    </li>
    <li>
      <a href="#"><i class="fa-brands fa-discord"></i> Discord</a>
    </li>
    <li>
      <a href="https://github.com/marchantweb/vuexyz" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
    </li>

  </ul>

</template>

<style>

.page-border {
  display: block;
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  background: transparent;
  width: calc(100vw - 80px);
  height: calc(100vh - 80px);
  border: 4px solid white;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
  }
}

.logo {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 115px;
  user-select: none;

  @media (max-width: 768px) {
    display: none;
  }
}


.grid-circle {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  height: 100vh;
  z-index: 0;
  user-select: none;
}

.metadata-box {
  width: 400px;
  position: absolute;
  top: 40px;
  right: 40px;
  padding: 30px 30px 0;
  border: 4px solid white;
  border-bottom: 0;

  h1 {
    max-width: 260px;
  }

  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
    right: 20px;
    width: calc(100vw - 40px);
    padding: 20px 20px 0;
  }
}

.install-box {
  background: white;
  margin-left: -30px;
  margin-right: -30px;
  margin-top: 30px;
  padding: 20px 40px;

  h1 {
    color: #0067DC;
    display: inline-block;
  }

  .copy-icon {
    color: #0067DC;
    display: inline-block;
    font-size: 20px;
    position: absolute;
    right: 30px;
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    margin-left: -20px;
    margin-right: -20px;
    padding: 15px 20px;
  }
}

ul.nav-links {
  position: absolute;
  bottom: 80px;
  left: 80px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    bottom: 40px;
    left: 40px;
  }

  li {
    transition: transform 0.2s ease-in-out;
    color: white;
    font-family: "JetBrains Mono", monospace;
    font-size: 16px;
    line-height: 21px;
    font-weight: bold;
    text-transform: uppercase;
    text-wrap: pretty;
    cursor: default;

    a {
      display: flex;
      gap: 15px;
      align-items: center;
    }

    i {
      font-size: 20px;
    }

    &:hover {
      transform: translate3d(5px, 0, 0);
    }
  }
}

.shape-icons{
  position: absolute;
  bottom: 80px;
  right: 80px;

  @media (max-width: 768px) {
    display: none;
  }
}

</style>
