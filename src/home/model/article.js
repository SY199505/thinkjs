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
		return this.where({id: id}).find();
	}
	updateArticleDetail(id){
		return this.where({id: id}).update({
			title: title, 
			intro: intro, 
			img: img, 
			content: content, 
			writer: writer
		});
	}
}