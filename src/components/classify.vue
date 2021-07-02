<template>
  <div class="classify">
    <div class="top">
      <!-- 头部 -->
      <div class="navbar">
        <div class="nav-1">
          <mu-icon size="26" value="search" color="gray"></mu-icon>
        </div>
        <div class="nav-2">分类</div>
        <div class="nav-3">
          <mu-icon
            size="26"
            value="filter_list"
            color="gray"
            @click="drawerOpen = !drawerOpen"
          ></mu-icon>
        </div>
      </div>

      <!-- 分类列表 -->
      <div class="tab">
        <div
          class="item"
          v-bind:class="{ sel: tabIndex == k }"
          v-for="(item, k) in tab"
          :key="k"
          @click="tabIndex = k"
        >
          <div>{{ item }}</div>
          <div class="bar" v-if="tabIndex == k"></div>
        </div>
      </div>
    </div>
    <div class="top-brace"></div>

    <!-- 抽屉 -->
    <mu-drawer
      :open.sync="drawerOpen"
      :docked="false"
      :right="true"
      :width="150"
    >
      <mu-list>
        <mu-list-item button @click="type = null">
          <div class="type">
            <div>
              <mu-icon
                size="20"
                value="done"
                color="red"
                v-if="type == null"
              ></mu-icon>
            </div>
            <div v-bind:class="{ sel: type == null }">全部</div>
          </div>
        </mu-list-item>
        <mu-list-item button @click="type = '唇膏'">
          <div class="type">
            <div>
              <mu-icon
                size="20"
                value="done"
                color="red"
                v-if="type == '唇膏'"
              ></mu-icon>
            </div>
            <div v-bind:class="{ sel: type == '唇膏' }">唇膏</div>
          </div>
        </mu-list-item>
        <mu-list-item button @click="type = '唇釉'">
          <div class="type">
            <div>
              <mu-icon
                size="20"
                value="done"
                color="red"
                v-if="type == '唇釉'"
              ></mu-icon>
            </div>
            <div v-bind:class="{ sel: type == '唇釉' }">唇釉</div>
          </div>
        </mu-list-item>
        <mu-list-item button @click="type = '唇彩'">
          <div class="type">
            <div>
              <mu-icon
                size="20"
                value="done"
                color="red"
                v-if="type == '唇彩'"
              ></mu-icon>
            </div>
            <div v-bind:class="{ sel: type == '唇彩' }">唇彩</div>
          </div>
        </mu-list-item>
        <mu-list-item button @click="type = '唇蜜'">
          <div class="type">
            <div>
              <mu-icon
                size="20"
                value="done"
                color="red"
                v-if="type == '唇蜜'"
              ></mu-icon>
            </div>
            <div v-bind:class="{ sel: type == '唇蜜' }">唇蜜</div>
          </div>
        </mu-list-item>
      </mu-list>
    </mu-drawer>

    <!-- 产品列表 -->
    <div class="list">
      <mu-ripple
        class="item"
        v-for="(item, k) in list"
        :key="k"
        @click="goPage('productDetail')"
      >
        <img :src="item.img" alt="" />
        <div>
          <div class="title">{{ item.title }}</div>
          <div class="footer">
            <div>
              <mu-icon
                size="14"
                value="favorite_two_tone"
                color="red"
              ></mu-icon>
              <span>10</span>
            </div>
            <div>
              ¥ <span>{{ item.price }}</span>
            </div>
          </div>
        </div>
      </mu-ripple>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classify",
  data() {
    return {
      drawerOpen: false,
      type: null,
      tabIndex: 0,
      tab: [
        "纪梵希",
        "YSL",
        "MAC",
        "香奈儿",
        "雅诗兰黛",
        "迪奥",
        "兰蔻",
        "阿玛尼",
        "TF",
        "姣兰",
      ],
      list: [
        {
          img:
            "https://res.yslbeautycn.com/resources/2021/3/4/16148607887594482_238X265.jpg",
          enTitle: "ROUGE PUR COUTURE LIPSTICK",
          title: "圣罗兰纯口红",
          tag: "2021限定",
          price: "335",
        },
        {
          img:
            "https://res.yslbeautycn.com/resources/2021/1/16/16108069859424860_238X265.jpg?version=20210302183440013",
          enTitle: "ROUGE PUR COUTURE LIPSTICK",
          title: "圣罗兰纯口红",
          tag: "2021限定",
          price: "335",
        },
        {
          img:
            "https://res.yslbeautycn.com/resources/2021/1/16/16108069859424860_238X265.jpg?version=20210302183440013",
          enTitle: "ROUGE PUR COUTURE LIPSTICK",
          title: "圣罗兰纯口红",
          tag: "2021限定",
          price: "335",
        },
        {
          img:
            "https://res.yslbeautycn.com/resources/2021/1/16/16108069859424860_238X265.jpg?version=20210302183440013",
          enTitle: "ROUGE PUR COUTURE LIPSTICK",
          title: "圣罗兰纯口红",
          tag: "2021限定",
          price: "335",
        },
        {
          img:
            "https://res.yslbeautycn.com/resources/2020/9/23/16008468346346461_238X265.jpg?version=20210302183440013",
          enTitle: "ROUGE PUR COUTURE THE SLIM GLOW MATTE",
          title: "圣罗兰细管柔光纯口红",
          tag: "",
          price: "350",
        },
        {
          img:
            "https://res.yslbeautycn.com/resources/2018/12/12/15446070755335219_238X265.jpg?version=20210302183440013",
          enTitle: "ROUGE PUR COUTURE THE SLIM MATTE LIPSTICK",
          title: "圣罗兰细管纯口红",
          tag: "",
          price: "350",
        },
      ],
    };
  },
  methods: {
    goPage(url) {
      console.log(url);
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.classify {
  .top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 88px;
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
        text-align: center;
      }
      .nav-3 {
        width: 30%;
        text-align: right;
      }
    }
  }

  .top-brace {
    height: 88px;
  }

  .tab {
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow-x: auto;
    color: #999;
    font-weight: 500;
    .item {
      flex-shrink: 0;
      padding-right: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      .bar {
        width: 20px;
        height: 4px;
        background: red;
        border-radius: 2px;
      }
    }

    .sel {
      color: #333;
      font-size: 16px;
    }
    .item:last-child {
      padding-right: 10px;
    }
  }

  .type {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div:nth-child(1) {
      width: 15%;
    }
    > div:nth-child(2) {
      width: 60%;
    }
    .sel {
      font-weight: bolder;
      color: red;
    }
  }

  .list {
    padding: 16px 4% 0 4%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      position: relative;
      width: 48%;
      margin-bottom: 16px;
      text-align: center;
      color: #333;
      background: #fff;
      > img {
        width: 100%;
      }
      > div {
        padding: 4px 8px 10px 8px;
        .title {
          height: 42px;
          font-weight: bold;
        }
        .footer {
          margin-top: 4px;
          display: flex;
          justify-content: space-between;
          > div {
            display: flex;
            align-items: center;
            > span {
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
}
</style>