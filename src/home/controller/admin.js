'use strict';

import Base from './base.js';

export default class extends Base {
  async editAction(){
    let articleModel = this.model('article');
    let id = this.http.pathname.substr(5);
    let isEmpty = think.isEmpty(articleModel.getArticleDetail(id));
    let object = articleModel.where({id: id}).find();
    let articleDetail = await articleModel.getArticleDetail(id);
    let post = this.post();


    this.assign({
    	articleDetail: articleDetail,
    	id: id,
      isEmpty: isEmpty,
      object: object,
      post: post
    });  	
  	return this.display();
  }
  async saveAction(){
    let articleModel = this.model('article');
    let id = this.http.pathname.substr(5);
    let post = this.post();
    // let articleDetail = await articleModel.updateArticleDetail(id, title, intro, img, content, writer);
    let articleList = await articleModel.getArticleList();
    this.assign({
      articleList: articleList,
      post: post
    });    
    // return this.redirect();
    return this.display('/admin/edit');
  }
}