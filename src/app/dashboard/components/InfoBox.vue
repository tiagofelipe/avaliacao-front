<script>
export default {
  name: 'InfoBox',
  props: {
    info: {
      required: true,
      type: String
    },
    value: {
      required: true
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="info-box">
      <span class="value">{{ value }}</span>
      <span class="info">{{ info }}</span>
    </div>
  </div>
</template>

<style scoped>
  .info-box {
    background-color: #ffffff;
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .main {
    padding: 5px;
  }
  .value {
    font-weight: bolder;
    font-size: 1.5rem;
  }
  .info {
    text-transform: uppercase;
  }
</style>
