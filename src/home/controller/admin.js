'use strict';

import Base from './base.js';

export default class extends Base {
  async editAction(){
    let articleModel = this.model('article');
    let id = this.http.pathname.substr(5);
    let isEmpty = think.isEmpty(articleModel.getArticleDetail(id));
    let object = articleModel.where({id: id}).find();
    let articleDetail = await articleModel.getArticleDetail(id);
    this.assign({
    	articleDetail: articleDetail,
    	id: id
    });  	
  	return this.display();
  }
  async saveAction(){
    let articleModel = this.model('article');
    let id = this.http.pathname.substr(5);
    let post = this.post();
    let articleDetail = await articleModel.updateArticleDetail(post.id, post.title, post.intro, post.img, post.content, post.writer);
    let articleList = await articleModel.getArticleList();
    this.assign({
      articleList: articleList,
      articleDetail: articleDetail
    });    
    console.log(post);
    return this.redirect();
    // return this.display('/admin/edit');
    // return this.display();
  }
}