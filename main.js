function ArrayList(){
	this.createList(arguments);
}

ArrayList.prototype = {

	list: [],

	add: function(){
		for(var i = 0; i < arguments.length; i++){
			this.list.push(arguments[i]);
		}
	},

	addTo: function(index, value){
		this.shiftForwardFrom(index, this.list);
		this.list[index] = value;
	},

	get: function(index){
		return this.list[index] ? this.list[index] : -1;
	},

	last: function(){
		return this.list[this.list.length - 1];
	},

	indexOf: function(element){
		return this.list.indexOf(element);
	},

	contains: function(element){
		return this.list.indexOf(element) == -1 ? false : true;
	},

	removeByObject: function(object){
		var index = this.list.indexOf(object);
		this.removeByIndex(index);
	},

	removeByIndex: function(index){
		this.list[index] = null;
		this.list = this.cleanArray(this.list, null);
	},

	pop: function(){
		this.list.pop();
	},

	push: function(element){
		this.list.push(element);
	},

	clear: function(){
		this.list = [];
	},

	size: function(){
		return this.list.length;
	},

	filter: function(callback){
		var filteredList = this.list.filter(callback);
		var newList = new ArrayList();
		newList.create(filteredList);
		return newList;
	},

	map: function(callback){
		var mappedList = this.list.map(callback);
		var newList = new ArrayList();
		newList.create(mappedList);
		return newList;
	},

	create: function(array){
		this.list = array;
	},

	isEqualTo: function(other){
		if(this.size() == other.size()){

			var result = true;

			for(var i = 0; i < this.size(); i++){
				if(this.get(i) != other.get(i))
					result = false;
			}

			return result;
		}
		
		else
			return false;
	},

	createList: function(arguments){
		this.list = [];
		for(var i = 0; i < arguments.length; i++){
			this.list[i] = arguments[i];
		}
	},

	cleanArray: function(array, toRemove){
		var result = array.filter(function(element){
			if(element != toRemove)
				return true;
		});

		return result;
	},

	shiftForwardFrom: function(index, array){
		for(var i = array.length - 1; i >= index; i--){
			array[i + 1] = array[i];
		}
	}

}

module.exports = ArrayList;