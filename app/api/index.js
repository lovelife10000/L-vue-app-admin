import { UserResource, AuthResource, ArticleResource, TagResource, MobileResource, CommentResource } from './resources';

export default {
  localLogin(data) {
    return AuthResource.save({ id: 'local' }, data);
  },
  getSnsLogins() {
    return UserResource.get({ id: 'snsLogins' });
  },
  getMe() {
    return UserResource.get({ id: 'me' });
  },
  mdUser(data) {
    return UserResource.update({ id: 'mdUser' }, data);
  },
  getTagList() {
    return TagResource.get({ id: 'getFrontTagList' });
  },
  getApps() {
    return MobileResource.get({ id: 'getApps' });
  },
  // article
  getIndexImage() {
    return ArticleResource.get({ id: 'getIndexImage' });
  },
  getFrontArticleList(options) {
    return ArticleResource.get({ id: 'getFrontArticleList', ...options });
  },
  getFrontArticleCount() {
    return ArticleResource.get({ id: 'getFrontArticleCount' });
  },
  getFrontArticle(id) {
    return ArticleResource.get({ id, controller: 'getFrontArticle' });
  },
  toggleLike(id) {
    return ArticleResource.update({ id, controller: 'toggleLike' }, {});
  },
  getPrenext(id, options) {
    return ArticleResource.get({ id, controller: 'getPrenext', ...options });
  },
  // comment
  getFrontCommentList(id) {
    return CommentResource.get({ id, controller: 'getFrontCommentList' });
  },
  addNewComment(data) {
    return CommentResource.save({ id: 'addNewComment' }, data);
  },
  addNewReply(id, data) {
    return CommentResource.save({ id, controller: 'addNewReply' }, data);
  },
  delComment(id) {
    return CommentResource.remove({ id });
  },
  delReply(id, data) {
    return CommentResource.update({ id, controller: 'delReply' }, data);
  },
};
