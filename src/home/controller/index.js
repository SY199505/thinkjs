'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let articleModel = this.model('article');
    let articleList = await articleModel.getArticleList();
    this.assign({
    	articleList: articleList
    });
    // return this.success(articleList);
    return this.display('index');
  }
}