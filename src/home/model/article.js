'use strict';
/**
 * model
 */
export default class extends think.model.base {
	getArticleList(){
	// 	return this.select();
		return this.select().then(function(data) {
			return data;
		});
	}

}
