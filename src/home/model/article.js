'use strict';
/**
 * model
 */
export default class extends think.model.base {
	getArticleList(){
		return this.select();
	}
	getArticleDetail(id){
		// return this.where({id: id}).select();
		return this.where({id: 1}).select();
	}
}