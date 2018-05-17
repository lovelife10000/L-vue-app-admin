<template>


    <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>主页</BreadcrumbItem>
            <BreadcrumbItem>{{breadcrumb.panel[1]}}</BreadcrumbItem>
            <BreadcrumbItem>{{breadcrumb.basicInfo[1]}}</BreadcrumbItem>
        </Breadcrumb>
        <Card>
            <div style="height: 600px">Content</div>
        </Card>
    </Content>


</template>
<script>


import { mapActions, mapState } from 'vuex';

const appConfig = require('config/app');

export default {
  data() {
    return {
      breadcrumb: appConfig.breadcrumb,
    };
  },

  components: {},
  computed: {
    ...mapState({
      indexImg: ({ globalVal }) => globalVal.indexImg,
      tagList: ({ tagList }) => tagList.items,
      options: ({ options }) => options.item,
      articleList: ({ articleList }) => articleList.items,
      isMore: ({ articleList }) => articleList.isMore,
      isFetching: ({ articleList }) => articleList.isFetching,
    }),
  },
  beforeCreate() {
    debugger;
  },
  mounted() {
    debugger;
  },
  created() {
    debugger;
    if (this.indexImg === '') {
      this.getIndexImage();
    }
    if (this.tagList.length < 1) {
      this.getTagList();
    }
    if (this.articleList.length < 1) {
      this.getArticleList({ options: this.options });
    }
  },
  methods: {
    ...mapActions([
      'getIndexImage',
      'getTagList',
      'changeOptions',
      'getArticleList',
    ]),
    handleChange(options, isAdd = false) {
      this.changeOptions(options);
      this.getArticleList({ options: this.options, isAdd });
    },
  },
};
</script>
