<template>
  <div class="home">
    <!-- 头部 -->
    <div class="top">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="top-brace"></div>

    <div class="center">
      <!-- 文章列表-左列 -->
      <div>
        <div
          class="car"
          v-for="(item, k) in list"
          :key="k"
          :hidden="k % 2 != 0"
        >
          <img :src="item.img" alt="" />
          <div class="detail">
            <div>{{ item.title }}</div>
            <div class="data">
              <img src="../assets/zan.png" alt="" />{{ item.like }}
              <span></span>
              <img src="../assets/star.png" alt="" />{{ item.follow }}
            </div>
          </div>
        </div>
      </div>
      <!-- 文章列表-右边列 -->
      <div>
        <div
          class="car"
          v-for="(item, k) in list"
          :key="k"
          :hidden="k % 2 == 0"
        >
          <img :src="item.img" alt="" />
          <div class="detail">
            <div>{{ item.title }}</div>
            <div class="data">
              <img src="../assets/zan.png" alt="" />{{ item.like }}
              <span></span>
              <img src="../assets/star.png" alt="" />{{ item.follow }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      list: [
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1126520808,3531290935&fm=15&gp=0.jpg",
          title: "机车",
          like: 5,
          follow: 12,
        },
        {
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1048909548,455446069&fm=15&gp=0.jpg",
          title: "膝盖中了一箭",
          like: 5,
          follow: 12,
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2003998373,3716492993&fm=26&gp=0.jpg",
          title: "可爱又迷人的反派角色",
          like: 5,
          follow: 12,
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4144537612,3579728206&fm=26&gp=0.jpg",
          title: "哈哈哈",
          like: 5,
          follow: 12,
        },
        {
          img:
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3574418736,1875635343&fm=26&gp=0.jpg",
          title: "咕噜咕噜",
          like: 5,
          follow: 12,
        },
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3044773326,1786446511&fm=26&gp=0.jpg",
          title: "梗",
          like: 5,
          follow: 12,
        },
        {
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F16%2F20151116083757_eRiBJ.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617352329&t=4d010b13fdcd861ada99cd97a5686553",
          title: "吃快餐",
          like: 5,
          follow: 12,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  .top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    > img {
      width: 50%;
    }
  }
  .top-brace {
    height: 60px;
  }
  .center {
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    > div {
      width: 48%;
      .car {
        background: #fff;
        overflow: hidden;
        margin-bottom: 16px;
        > img {
          width: 100%;
        }
        .detail {
          padding: 14px;
          font-size: 14px;
        }
        .data {
          margin-top: 4px;
          display: flex;
          align-items: center;
          color: #bfbfbf;
          > img {
            width: 16px;
            margin-right: 2px;
          }
          > span {
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
