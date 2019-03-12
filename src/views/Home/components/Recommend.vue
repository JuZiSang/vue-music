<template>
  <div class="Recommend">
    <!-- 歌单列表 -->
    <div class="title">推荐歌单</div>
    <div class="gedan-list">
      <div class="gedan-item" v-for="i in 6" :key="i">
        <div class="gedan-img">
          <img
            src="http://p2.music.126.net/xwHDGv117-IvxtXwKBuBrw==/109951163911624290.webp?imageView&amp;thumbnail=246x0&amp;quality=75&amp;tostatic=0&amp;type=webp"
          >
          <div class="gedan-num">
            <img src class="gedan-icon">
            7727.5万
          </div>
        </div>
        <div class="gedan-title">【VIP专享】一周年新歌推荐</div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="title">最新音乐</div>
    <div class="music-list">
      <div class="music-item" v-for="i in 6" :key="i+10">
        <div class="music-left">
          <div class="music-title">Show Me Love</div>
          <div class="music-doc">
            <img class="icon_sq">
            <div class="music-text">xxxxxxxxxxxxxxxxxxx</div>
          </div>
        </div>
        <div class="music-right">
          <img src="">
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="logo">
        <img src="../../../assets/imgs/icon_logo.png">
        网易云音乐
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.Recommend {
  .title {
    border-left: 2px solid #d33a31;
    padding-left: 6px;
    margin: 16px 0;
    font-size: 14px;
  }
  .gedan-list {
    display: flex;
    flex-wrap: wrap;

    .gedan-item {
      width: 33.333333%;
      box-sizing: border-box;
      font-size: 14px;
      padding-left: 2px;
      &:nth-child(1),
      &:nth-child(4) {
        padding: 0;
      }
      &:nth-child(n + 4) {
        margin-top: 20px;
      }

      .gedan-img {
        width: 100%;
        height: 122px;
        position: relative;
        background-color: gray;
        img {
          width: 100%;
          height: 100%;
        }
        .gedan-num {
          color: #fff;
          font-size: 10px;
          position: absolute;
          right: 4px;
          top: 2px;
          display: flex;
          img {
            margin: 0 4px;
            width: 10px;
            height: 10px;
          }
        }
      }
      .gedan-title {
        font-size: 12px;
        padding: 2px 2px;
      }
    }
  }
  .music-list {
    .music-item {
      display: flex;
      justify-content: space-around;
      padding: 12px 0;
      border-bottom: 1px solid #ddd;
      .music-left {
        width: 85%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 12px;
        .music-title {
          font-size: 17px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: normal;
        }
        .music-doc {
          display: flex;
          align-items: center;
          img {
            width: 10px;
            height: 10px;
            background-color: grey;
          }
          .music-text {
            padding-left: 4px;
            color: #888;
            font-size: 12px;
          }
        }
      }
      .music-right {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 22px;
          height: 22px;
          background-color: gray;
        }
      }
    }
  }
  .footer {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    img {
      margin-bottom: -2px;
      width: 28px;
      height: 28px;
    }
  }
}
</style>
