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
    /*this.assign('title', articleList[0].title);
    this.assign('intro', articleList[0].intro);
    this.assign('img', articleList[0].img);
    this.assign('content', articleList[0].content);*/
    return this.display('index');
  }
  async detailAction(){
    let articleModel = this.model('article');
    let url = this.http;
    let articleDetail = await articleModel.getArticleDetail();
    this.assign({
    	articleDetail: articleDetail,
    	url: url
    });  	
    return this.display();
  }
}