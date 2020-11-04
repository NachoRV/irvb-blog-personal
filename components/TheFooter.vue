<template>
  <footer class="footer">
    <p class="">
      <span>Created with &#128154; by IRVB </span>
      follow me on
      <a
        href="https://twitter.com/I_R_V_B"
        target="_blank"
      >
        <img src="~assets/svg/twitter-2.svg" alt="twitter" class="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/ignacioroyovillanova/"
        target="_blank"
      >
        <img src="~assets/svg/linkedin-2.svg" alt="twitter" class="icon" />
      </a>
      <a
        href="https://github.com/NachoRV"
        target="_blank"
      >
        <img src="~assets/svg/github-2.svg" alt="twitter" class="icon" />
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  name : 'TheFooter'
}
</script>

<style scoped>
.icon {
  margin: 0 0 0 5px;
  width: 24px;
  height: 24px;
}
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
}
@media (max-width: 1010px) {
  span {
    display: none;
  }
}
</style>
