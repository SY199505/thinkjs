'use strict';
/**
 * model
 */
export default class extends think.model.base {
	getArticleList(){
		return this.select();
	}
}