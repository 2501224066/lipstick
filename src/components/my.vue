<template>
  <div class="my">
    <!-- 头像名称 -->
    <div class="header">
      <div class="avatar">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3699570905,241001630&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="name">若然未做过便知我为何</div>
      <div class="tag">BEAUTY</div>
    </div>

    <!-- ICON -->
    <div class="icon">
      <div>
        <mu-icon size="32" value="favorite" color="red"></mu-icon>
        <div>收藏</div>
      </div>
      <div>
        <mu-icon size="32" value="brush" color="red"></mu-icon>
        <div>评论</div>
      </div>
      <div>
        <mu-icon size="32" value="bubble_chart" color="red"></mu-icon>
        <div>活动</div>
      </div>
      <div>
        <mu-icon size="32" value="chat" color="red"></mu-icon>
        <div>消息</div>
      </div>
      <div>
        <mu-icon size="32" value="settings" color="red"></mu-icon>
        <div>设置</div>
      </div>
    </div>

    <!-- 联系我们 -->
    <div class="contact">联系我们</div>
    <div class="icon">
      <div>
        <mu-icon size="28" value="bug_report" color="gray"></mu-icon>
        <div>BUG反馈</div>
      </div>
      <div>
        <mu-icon size="28" value="insert_invitation" color="gray"></mu-icon>
        <div>提交建议</div>
      </div>
    </div>
    <!-- 邀请 -->
    <div class="invite">
      <div class="title">邀请好友加入我们一起玩</div>
      <div class="memo">优质美妆爱好者聚集地等你来</div>
      <mu-ripple class="create" color="red" :opacity="0.5">
        生成海报
      </mu-ripple>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my {
  .header {
    padding-top: 40px;
    background: #eee;
    text-align: center;
    .avatar {
      background: linear-gradient(
        to bottom,
        #eee 0,
        #eee 50%,
        #fafafa 51%,
        #fafafa 100%
      );
      display: flex;
      flex-direction: column;
      align-items: center;
      > img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
      }
    }
    .name {
      background: #fafafa;
      padding-top: 10px;
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }
    .tag {
      padding-top: 4px;
      background: #fafafa;
      font-size: 10px;
      color: #999;
      letter-spacing: 6px;
      margin-bottom: 20px;
    }
  }

  .icon {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      > div {
        margin-top: 4px;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .contact {
    font-size: 14px;
    color: #999;
    font-weight: bolder;
    padding: 0 6%;
    margin: 10px 0;
  }

  .invite {
    margin: 20px 4% 0 4%;
    padding: 10px;
    background: url("../assets/invite.png") #fff no-repeat;
    background-size: 50%;
    background-position: 100%;
    .title {
      font-size: 16px;
      color: #333;
      font-weight: bolder;
    }
    .memo {
      font-size: 12px;
      color: #999;
      margin: 6px 0 10px 0;
    }
    .create {
      position: relative;
      width: 70px;
      text-align: center;
      height: 28px;
      line-height: 28px;
      box-sizing: border-box;
      color: #333;
      border: 1px solid #ececec;
      font-size: 12px;
    }
  }
}
</style>