<template>
  <p>{{ msg }}, world!</p>
</template>

<script>
module.exports = {
  data: function() {
    return {
      msg: "Hello"
    };
  }
};
</script>

<style scoped>
p {
  color: #ff3355;
  text-align: center;
  font-size: 23px;
}
</style>
