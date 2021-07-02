<template>
  <div class="product-detail">
    <!-- 头部 -->
    <div class="top">
      <div class="navbar">
        <div class="nav-1">
          <mu-icon
            size="26"
            value="keyboard_arrow_left"
            color="gray"
            @click="back"
          ></mu-icon>
        </div>
        <div class="nav-2">
          <img
            src="https://res.yslbeautycn.com/build/images/logo@2x.png"
            alt=""
          />
        </div>
        <div class="nav-3"></div>
      </div>
    </div>
    <div class="top-brace"></div>

    <!-- 轮播 -->
    <div class="swiper-box">
      <div class="tag">刻字</div>
      <div class="like">
        <mu-icon
          v-if="like"
          size="26"
          value="favorite_two_tone"
          color="red"
          @click="like = !like"
        ></mu-icon>
        <mu-icon
          v-else
          size="26"
          value="favorite_two_tone"
          color="white"
          @click="like = !like"
        ></mu-icon>
      </div>
      <mu-carousel hide-controls :cycle="false" class="swiper">
        <mu-carousel-item v-for="(item, k) in imgs" :key="k">
          <img :src="item" />
        </mu-carousel-item>
      </mu-carousel>
    </div>

    <!-- 信息 -->
    <div class="detail">
      <div class="ename">L'absolu Rouge Intimatte</div>
      <div class="name">柔雾哑光唇膏</div>
      <div class="limit" v-if="limit != ''">
        <div class="line"></div>
        <div>{{ limit }}</div>
        <div class="line"></div>
      </div>
      <div class="trans" v-for="(item, k) in color" :key="k">
        <div v-if="id == item.id">
          <div class="price">¥{{ item.price }}</div>
          <div class="color">
            <div :style="{ background: item.bg }"></div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 色号 -->
    <div class="color-list">
      <div class="title">全部色号</div>
      <div
        class="item"
        :class="id == item.id ? 'item-sel' : ''"
        v-for="(item, k) in color"
        :key="k"
        @click="id = item.id"
      >
        <div :style="{ background: item.bg }"></div>
      </div>
    </div>

    <!-- TAB -->
    <div class="tab">
      <mu-container>
        <mu-bottom-nav :value.sync="tabName" shift color="#000">
          <mu-bottom-nav-item
            value="memo"
            title="产品详情"
            icon="data_usage"
          ></mu-bottom-nav-item>
          <mu-bottom-nav-item
            value="comment"
            title="用户评价"
            icon="insert_emoticon"
          ></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>

      <!-- 产品详情 -->
      <div class="memo" v-if="tabName == 'memo'">
        <img v-for="(item, k) in memo" :key="k" :src="item" alt="" />
      </div>

      <!-- 用户评论 -->
      <div class="comment" v-if="tabName == 'comment'">
        <div class="box" v-for="(item, k) in comment" :key="k">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="right">
            <div class="content">
              {{
                item.content.length > 26
                  ? item.content.substring(0, 25) + "..."
                  : item.content
              }}
            </div>
            <div class="footer">
              <div class="star">
                <mu-icon
                  size="12"
                  value="star"
                  color="red"
                  v-for="i in item.star"
                  :key="i"
                ></mu-icon
                ><mu-icon
                  size="13"
                  value="star_border"
                  color="gray"
                  v-for="i in 5 - item.star"
                  :key="i"
                ></mu-icon>
              </div>
              <div class="time">{{ item.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 去往官网 -->
    <div
      class="to"
      @click="jump('https://www.yslbeautycn.com/item/00030YSL-082')"
    >
      去往官网: www.yslbeautycn.com
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      id: 11,
      like: false,
      limit: "2021 限定",
      imgs: [
        "https://res.lancome.com.cn/resources/2021/3/4/16148514598953689_900X900.jpg?version=20210304211303503",
        "https://res.lancome.com.cn/resources/2021/3/2/16146797576997261_900X900.jpg?version=20210304211303503",
        "https://res.lancome.com.cn/resources/2020/9/28/1601301196884813_900X900.jpg?version=20210304211303503",
        "https://res.lancome.com.cn/resources/2020/7/1/15935898796953944_900X900.jpg?version=20210304211303503",
      ],
      colorActive: 0,
      color: [
        { id: 11, bg: "#b52232", name: "#888 小野莓", price: 235 },
        { id: 13, bg: "#c6171f", name: "#525 琥珀南瓜棕", price: 235 },
        { id: 21, bg: "#b5152f", name: "#315 粉晶蜜桃", price: 235 },
        { id: 32, bg: "#bc1538", name: "#663 小野莓", price: 235 },
        { id: 44, bg: "#a80f11", name: "#264 琥珀南瓜棕", price: 235 },
        { id: 51, bg: "#b22820", name: "#462 粉晶蜜桃", price: 235 },
        { id: 67, bg: "#911d30", name: "#863 小野莓", price: 250 },
        { id: 73, bg: "#b22820", name: "#815 琥珀南瓜棕", price: 235 },
        { id: 82, bg: "#b23a36", name: "#247 粉晶蜜桃", price: 235 },
      ],
      tabName: "comment",
      memo: [
        "https://res.lancome.com.cn/resources/2021/3/4/16148300321938917.jpg",
        "https://res.lancome.com.cn/resources/2020/4/7/15862458779617810.jpg",
      ],
      comment: [
        {
          img:
            "https://res.lancome.com.cn/resources/2021/3/4/16148514598953689_900X900.jpg?version=20210304211303503",
          content: "禽兽之变诈几何哉未恐惊其色闻言则止非为心之所善信啊啊",
          star: 3,
          time: "2020-10-09",
        },
        {
          img:
            "https://res.lancome.com.cn/resources/2020/9/9/15996423500407290.jpg",
          content:
            "颜色超正的，人家超喜欢的，爱死这款了，黑皮救星啊，超❤️超❤️超❤️的呀～～",
          star: 5,
          time: "2021-01-09",
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    jump(url) {
      window.location.href = url;
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  left: 0;
  top: 0;
  background: #fafafa;
  z-index: 100;
  .navbar {
    height: 60px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-1 {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .nav-2 {
      width: 40%;
      img {
        width: 100%;
      }
    }
    .nav-3 {
      width: 30%;
      text-align: right;
    }
  }
}
.top-brace {
  height: 60px;
}

.swiper-box {
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
  .tag {
    position: absolute;
    left: 0;
    top: 0;
    padding: 4px 14px;
    font-size: 12px;
    background: #000;
    color: #fff;
    z-index: 1;
  }
  .like {
    position: absolute;
    right: 14px;
    top: 14px;
    z-index: 1;
  }
  .swiper {
    width: 100%;
    height: 100vw;
    img {
      width: 100%;
    }
    /deep/ .mu-carousel-indicator-button {
      width: 10px;
      height: 10px;
      margin: 0 4px;
    }
    /deep/ .mu-carousel-indicator-icon {
      width: 8px;
      height: 8px;
    }
  }
}

.detail {
  margin-top: 20px;
  padding: 0 4%;
  text-align: center;
  .ename {
    font-size: 15px;
    color: #333;
    font-weight: bold;
  }
  .name {
    font-size: 22px;
    color: #000;
    font-weight: bold;
    margin-top: 4px;
  }
  .limit {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke: 0.3px #000;
    .line {
      width: 10%;
      height: 2px;
      border: 0.2px solid #666;
      margin: 0 2%;
    }
  }
  .trans {
    .price {
      margin: 20px 0;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    .color {
      font-size: 14px;
      color: #333;
      display: flex;
      align-items: center;
      > div:nth-child(1) {
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
    }
  }
}

.color-list {
  margin-top: 20px;
  padding: 10px 4%;
  display: flex;
  flex-wrap: wrap;
  background: #eee;
  .title {
    width: 100%;
    margin-bottom: 4px;
    font-size: 14px;
    color: #999;
  }
  .item {
    padding: 4px;
    width: 14.28%;
    height: 41px;
    > div {
      width: 100%;
      height: 100%;
    }
  }
  .item-sel {
    border: 1px solid #333;
  }
}
.tab {
  margin-top: 50px;
  /deep/ .mu-bottom-nav {
    height: 60px;
  }
  /deep/ .container {
    padding: 0;
  }
  .memo {
    > img {
      width: 100%;
    }
  }
  .comment {
    padding: 10px 4% 0 4%;
    .box {
      margin-bottom: 20px;
      position: relative;
      width: 100%;
      height: 80px;
      left: 0;
      top: 0;
      .img {
        position: absolute;
        left: 0;
        top: 0;
        width: 80px;
        height: 80px;
        margin-right: 10px;
        z-index: 1;
        overflow: hidden;
        > img {
          width: 100%;
        }
      }
      .right {
        position: absolute;
        width: 100%;
        height: 80px;
        padding: 10px 10px 0 80px;
        left: 10px;
        top: 10px;
        background: #fff;
        z-index: 0;
        .content {
          height: 46px;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .star {
            display: flex;
            align-items: center;
          }
          .time {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
}
.to {
  font-size: 12px;
  color: #333;
  margin: 50px 0;
  text-align: center;
}
</style>