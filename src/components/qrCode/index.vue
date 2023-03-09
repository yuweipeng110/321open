<template><div class="qrcode" ref="qrCodeUrl"></div></template>

<script>
import QRCode from "qrcodejs2";
export default {
  props: {
    text: "",
  },
  data() {
    return {};
  },

  mounted() {
    this.creatQrCode();
  },
  methods: {
    creatQrCode() {
      let qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: this.text, // 需要转换为二维码的内容
        width: 120,
        height: 120,
      });
    },
  },
};
</script>

<style scoped>
</style>
