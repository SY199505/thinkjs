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
    	id: id,
      isEmpty: isEmpty,
      object: object
    });  	
  	return this.display();
  }
}