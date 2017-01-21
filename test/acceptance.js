var chai = require("chai");
var expect = chai.expect;

var arrayList = require("../main");

describe("Acceptance Test", function(){

	it("Add an element to the end the list", function(){

		var names = new arrayList();
		names.add("Wisdom");

		expect(names.last()).to.equal("Wisdom");

	});

	it("Adds multiple elements to the end of a list", function(){

		var names = new arrayList();
		names.add("Paul", "John", "Buky");

		expect(names.get(2)).to.equal("Buky");
		expect(names.get(1)).to.equal("John");
		expect(names.get(0)).to.equal("Paul");

	});

	it("Can clear all of its elements", function(){
		
		var names = new arrayList("Wisdom", "paul", "dan");
		expect(names.get(1)).to.equal("paul");

		names.clear();
		expect(names.get(0)).to.equal(-1);

	});

	it("Can return the index of the first occurence of a element", function(){

		var colors = new arrayList("red", "blue", "green");
		colors.add("purple", "orange", "yellow", "brown");

		expect(colors.indexOf("yellow")).to.equal(5);

	});

	it("It can remove an element by specifying the index and shrinks the array", function(){

		var words = new arrayList("book", "bag", "yelo", "calc");
		
		expect(words.size()).to.equal(4);
		expect(words.get(0)).to.equal("book");

		words.removeByIndex(0);

		expect(words.size()).to.equal(3);
		expect(words.get(0)).to.equal("bag");

	});

	it("Removes the first instance of an object and shrinks the array", function(){

		var words = new arrayList("book", "bag", "yelo", "calc");

		expect(words.size()).to.equal(4);
		expect(words.get(3)).to.equal("calc");

		words.removeByObject("calc");

		expect(words.size()).to.equal(3);
		expect(words.get(3)).to.equal(-1);

	});

	it("Adds a new element to a specified index while shifting the rest forward", function(){

		var letters = new arrayList("a", "b", "c", "d", "e");

		expect(letters.size()).to.equal(5);

		letters.addTo(2, "d");

		expect(letters.get(2)).to.equal("d");
		expect(letters.size()).to.equal(6);
		expect(letters.get(3)).to.equal("c");

	});

});