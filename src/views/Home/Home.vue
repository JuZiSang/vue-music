<template>
  <div class="Home">
    <div class="fixed">
      <header class="header">
        <div class="title">
          <img class="icon" src="../../assets/imgs/icon_logo.png">
          网易云音乐
        </div>
      </header>
      <div class="tabs">
        <router-link tag="div" class="tab" to="/home/recommend">
          <div>推荐音乐</div>
        </router-link>

        <router-link tag="div" class="tab" to="/home/hotSearch">
          <div>热歌榜</div>
        </router-link>

        <router-link tag="div" class="tab" to="/home/search">
          <div>搜索</div>
        </router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.Home {
  transform: rotate(90deg);

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  .header {
    height: 64px;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    background: #d43c33;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 18px;
      .icon {
        width: 30px;
        height: 30px;
        padding-right: 2px;
      }
    }
  }
  .tabs {
    display: flex;
    border-bottom: 1px solid #ddd;
    background: #fff;
    box-sizing: border-box;
    > .tab {
      width: 33.333333333%;
      text-align: center;
      > div {
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        display: inline-block;
        font-size: 14px;
        padding: 0 4px;
      }
      &.router-link-active {
        > div {
          border-bottom: 2px solid #d43c33;
        }
      }
    }
  }
  .content {
    padding-top: 64px + 40px;
    height: 1000px;
  }
}
</style>

