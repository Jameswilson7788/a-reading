<template>
  <div>
    <div class="header">
      <span class="version">Alpha: V0.0.1</span>
      <Nav></Nav>
    </div>
    <div class="body">
      <article>
        <h1 class="title">{{ title }}</h1>
        <br />
        <h3 class="sub-title">{{ subTitle }}</h3>
        <br />
        <b> 1.把工作時間排進行程</b>
        <p>
          某次我在看一個主管的行事曆，我看到他在日曆上註明了週二、三下午跟週五的早上都有個會，我心裡正在想：「看起來還蠻寬鬆的。」，這時候剛好有通電話找他，聽起來對方也是要跟他敲時間，他邊講電話邊看自己的行事曆，最後他說：「星期四上午10點，沒問題，我有空。」，下面這是最後他在行事曆上的行程規劃。
        </p>
        <b>2.保留一些時間給自己</b>
        <p>
          在最近兩年中，為了讓自己每週可以保留一些時間給自己，我會交代助理把每週二三的下午空下來，這兩個時段如果有人要找我，預設的回答都是已經有安排了，但他仍會把這件事反應給我，由我決定是否要把時間挪做他用。但這個保留時間是重要的，當你一整個禮拜都在開會與忙東忙西時，你會被事情推著走，沒有時間好好思考沉澱，而這兩個下午的時間就是我保留給自己的禮物。
        </p>
        <b>3.拒絕無意義的會議</b>
        <p>
          中高階主管有很多人上班的時間都花在開會上，而且會給自己很多理由說自己應該要參加這些會議，因為你必須要給建議，必須要做主，但就是這樣的想法害了自己，你總會有一堆會議需要參加，有些甚至還設定為每週開，當會議全面排開後你就發現自己的行程完全不是由自己的自由意志來決定，而是由你的部屬，你的協同部門來決定。
        </p>
        <b>4.堅持高效率</b>
        <p>
          關於這一點我前面也有提到，很多事情其實是不需要開會的，若只是同步資訊，那發個郵件或用wechat說一下，要高效就是打電話或碰面談清楚，因為大多數的會議都是一次booking一個小時以上，但講一通電話大約只要5–10分鐘就能解決了，而我也不要求每次開會都要有簡報，我認為只要大家不用簡報也能把事情說清楚，那我建議就不要浪費時間做簡報，更高效的溝通，不要把時間浪費在無謂的事情上頭。
        </p>
        <p>
          另外也有人常用番茄鐘等方法來管理自己的時間，我認為也都會有一定的效果在，但我認為時間管理最大的關鍵點有二：第一，你必須要很清楚哪些事情對你來說很重要，那就要放進行程裡，第二，你必須要捍衛自己的時間自主權，別輕易的讓他人決定你的時間，唯有如此，你才能真正善用時間，並把事情按時做好。
        </p>
      </article>
    </div>
  </div>
</template>

<script>
import Nav from "../../../../Header/Nav.vue";
export default {
  data() {
    return {
      title: "關於時間管理，我的五大訣竅",
      subTitle: "#2 以及一些“技術哲學”問題",
    };
  },
  components: { Nav },
};
</script>

<style lang="scss" scoped>
.version {
  position: fixed;
  top: 0;
  z-index: 999;
  font-size: 10px;
  opacity: 0.3;
}
.body {
  width: 60%;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
}
article {
  margin-top: 1rem;
}
.sub-title {
  color: #757575;
}
.header {
  height: 80px;
  background: white;
  margin: 0;
  padding: 0;
  box-shadow: 0px 1px 2px 0 black;
}
p {
  margin: 1rem;
}
</style>