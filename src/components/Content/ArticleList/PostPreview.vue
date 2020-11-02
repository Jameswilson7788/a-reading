<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="post-preview">
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
          <li v-html="item.title" class="title"></li>
          <li class="description">{{ item.description }}</li>
          <li class="author">{{ item.author }}</li>
          <li class="time">{{ item.time }}</li>
        </ul>
      </div>
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
            "http://www.postcards-from-google-earth.com/thumbs/PfGE/redmon/pfge_redmon_201109-300x212.jpg",
          title: "由蜜蜂的民主看美國的選舉",
          description:
            "#56-Plus 檢視人類民主制度的優劣，我們應該怎樣更高效的開會，以及檢視人類民主制度的優劣。",
          author: "W-Reading",
          time: "2020-10-12",
          star: 6,
        },
        {
          thumbnail:
            "http://www.postcards-from-google-earth.com/thumbs/PfGE/redmon/pfge_redmon_201109-300x212.jpg",
          title: "由蜜蜂的民主看美國的選舉",
          description:
            "#56-Plus 檢視人類民主制度的優劣，我們應該怎樣更高效的開會，以及檢視人類民主制度的優劣。",
          author: "W-Reading",
          time: "2020-10-12",
          star: 6,
        },
        {
          thumbnail:
            "http://www.postcards-from-google-earth.com/thumbs/PfGE/redmon/pfge_redmon_201109-300x212.jpg",
          title: "由蜜蜂的民主看美國的選舉",
          description:
            "#56-Plus 檢視人類民主制度的優劣，我們應該怎樣更高效的開會，以及檢視人類民主制度的優劣。",
          author: "W-Reading",
          time: "2020-10-12",
          star: 6,
        },
        {
          thumbnail:
            "http://www.postcards-from-google-earth.com/thumbs/PfGE/redmon/pfge_redmon_201109-300x212.jpg",
          title: "由蜜蜂的民主看美國的選舉",
          description:
            "#56-Plus 檢視人類民主制度的優劣，我們應該怎樣更高效的開會，以及檢視人類民主制度的優劣。",
          author: "W-Reading",
          time: "2020-10-12",
          star: 6,
        },
        {
          thumbnail:
            "http://www.postcards-from-google-earth.com/thumbs/PfGE/redmon/pfge_redmon_201109-300x212.jpg",
          title: "由蜜蜂的民主看美國的選舉",
          description:
            "#56-Plus 檢視人類民主制度的優劣，我們應該怎樣更高效的開會，以及檢視人類民主制度的優劣。",
          author: "W-Reading",
          time: "2020-10-12",
          star: 6,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
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
}
.post-preview:hover {
  background: rgba(117, 117, 117, 0.1);
}
.content {
  display: flex;
  width: 98%;
}
img {
  margin-left: 1rem;
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
  line-height: 2rem;
}
</style>