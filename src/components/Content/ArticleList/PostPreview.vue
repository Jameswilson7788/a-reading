<template>
  <div>
    <div class="vision">Alpha: V0.0.1</div>
    <div v-for="(item, index) in items" :key="index" class="post-preview">
      <a :href="item.url">
        <div class="content">
          <div class="thumbnail">
            <img
              :src="item.thumbnail"
              alt=""
              class="thumbnail"
              width="168"
              height="121"
            />
          </div>

          <ul class="">
            <li class="title">{{ item.title }}</li>
            <li class="description">{{ item.description }}</li>
            <li class="author">{{ item.author }}</li>
            <li class="time">{{ item.time }}</li>
          </ul>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      data: null,
      items: [
        {
          thumbnail:
            "https://cdn.substack.com/image/fetch/w_336,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F53fbe6f1-2ffc-4b71-9e77-be638c838233_1180x984.jpeg",
          title: "W-Reading-關於時間管理，我的五大訣竅",
          description: "#2 以及一些“技術哲學”問題",
          author: "W-Reading",
          time: "2020-10-24",
          star: 6,
          url: "./no1",
        },
        {
          thumbnail:
            "https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6769e05e-08eb-4041-8d2b-68b3e3a2bd99_602x602.jpeg",
          title: "W-Reading-殺死我們的將是飢餓，而不是新冠病毒",
          description: "#1-Plus Read The Word.Read The World.",
          author: "W-Reading",
          time: "2020-10-12",
          star: 6,
          url: "./no2",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color:black;
}
.post-preview {
  width: 60%;
  margin: auto;
  margin-top: 20px;
  padding: 14px 0 10px;
  display: flex;
  flex-direction: row;
  height: 121px;
  flex-direction: row;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}
.post-preview:hover {
  background: rgba(117, 117, 117, 0.1);
}
.content {
  display: flex;
  width: 98%;
}
.vision {
  position: fixed;
  top: 0;
  font-size: 10px;
}
img {
  margin-left: 1rem;
  @media only screen and (max-width: 576px) {
    display: none;
  }
}

li {
  list-style: none;
}
.thumbnail {
  margin-right: 1rem;
}

ul {
  line-height: 1.4rem;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.description {
  font-size: 16px;
  line-height: 1.4rem;
  color: #757575;
}
.time {
  line-height: 1.4rem;
}
</style>