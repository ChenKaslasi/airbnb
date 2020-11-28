<template>
  <section class="list-filter">
    <h1>Stays in {{ space }}</h1>
    <div class="buttons-container">
      <el-popover
        placement="bottom-start"
        :visible-arrow="false"
        title="Title"
        width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference"> Cancellation flexibility</el-button>
      </el-popover>
      <el-popover
        placement="bottom-start"
        :visible-arrow="false"
        title="Title"
        width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference"> Type of place</el-button>
      </el-popover>
      <el-popover
        placement="bottom-start"
        :visible-arrow="false"
        title="Title"
        width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference">Price</el-button>
      </el-popover>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    space: Object,
  },
};
</script>