<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: 'Menlo';
  src: url('~assets/fonts/Menlo-Regular.woff') format('woff'), /* Pretty Modern Browsers */

}
html {
  font-family: 'Menlo', 'Open Sans', sans-serif !important;
  /* font-family: 'Special Elite', cursive; */
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 100vw;

}
body {
  max-width: 100vw;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
