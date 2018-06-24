<script>
export default {
  name: 'InfoBox',
  props: {
    info: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: Number
    }
  },
  filters: {
    formatar (val = 0) {
      if (val < 1000) {
        return val
      }
      return val.toString().split('').reverse().join('').replace(/(\d{3})/g, '$1.').split('').reverse().join('').replace(/^\./, '')
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="info-box">
      <span class="value">{{ value | formatar }}</span>
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
