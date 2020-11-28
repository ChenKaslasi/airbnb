<template>
  <section class="list-filter">
    <h1>Stays in {{ space }}</h1>
    <div class="buttons-container">
        <button>Cancellation flexibility</button>
        <button>Type of place</button>
        <button>Price</button>
      <!-- <el-popover
        class="modal"
        placement="bottom-start"
        :visible-arrow="false"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference"> Cancellation flexibility</el-button>
      </el-popover>
      <el-popover
        class="modal"
        placement="bottom-start"
        :visible-arrow="false"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference"> Type of place</el-button>
      </el-popover>
      <el-popover
        class="modal"
        placement="bottom-start"
        :visible-arrow="false"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference">Price</el-button>
      </el-popover> -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    space: String,
  },
};
</script>