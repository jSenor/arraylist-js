var chai = require("chai");
var expect = chai.expect;

var arrayList = require("../main");

describe("Unit Test", function(){

	it("creates a list from its constructor arguments", function(){

		var names = new arrayList("wisdom", "jane", "jeff");
		expect(names.list[0]).to.equal("wisdom");

	});

	it("gets last element from the list", function(){

		var names = new arrayList("paul", "dan");
		expect(names.last()).to.equal("dan");

		var books = new arrayList("Sense 8", "Vision", "The Storm");
		expect(books.last()).to.equal(("The Storm"));

	});

	it("gets the element at a particular index", function(){

		var colors = new arrayList("red", "green", "blue");
		expect(colors.get(0)).to.equal("red");
		expect(colors.get(1)).to.equal("green");

	});

	it("returns -1 if there is no element at an index", function(){

		var colors = new arrayList("blue");
		expect(colors.get(0)).to.equal("blue");
		expect(colors.get(1)).to.equal(-1);

	});

	it("returns true if it contains an element and false otherwise", function(){

		var colors = new arrayList("blue", "orange");
		expect(colors.contains("blue")).to.equal(true);
		expect(colors.contains("red")).to.equal(false);

	});

	it("it can return the size of the list", function(){

		var ages = new arrayList(12, 13, 14, 15);
		ages.add(20);

		expect(ages.size()).to.equal(5);

		ages.add(50);
		expect(ages.size()).to.equal(6);

	});

	it("removes the element at an index", function(){

		var ages = new arrayList(12, 13, 14, 15);
		ages.removeByIndex(0);

		expect(ages.get(0)).to.not.equal(12);

	});

	it("shrinks an array after a remove operation", function(){

		var ages = new arrayList(12, 13, 14, 15);
		ages.removeByIndex(0);

		expect(ages.size()).to.equal(3);

	});

	it("removes the element by object", function(){

		var names = new arrayList("wisdom", "paul", "mary");
		names.removeByObject("paul");

		expect(names.get(1)).to.not.equal("paul");

	});

	it("add an element to a particular index", function(){

		var names = new arrayList("wisdom", "paul", "mary");
		names.addTo(1, "dan");

		expect(names.get(1)).to.equal("dan");

	});

	it("add an element to an index and shift previous elements forward", function(){

		var names = new arrayList("wisdom", "paul", "mercy");
		names.addTo(1, "dan");

		expect(names.get(1)).to.equal("dan");
		expect(names.get(2)).to.equal("paul");

		expect(names.size()).to.equal(4);

	});

	it("can filter its list if a particular element dosen't obey a rule", function(){

		var names = new arrayList("wisdom", "john", null, "wow");
		var filteredNames = names.filter(function(name){

			if(name != null)
				return true;

		});

		expect(filteredNames.size()).to.equal(3);
		expect(filteredNames.get(2)).to.equal("wow");

	});

	it("can convert an array to an arrayList", function(){

		var namesArray = ["wisdom", "wow", "hello"];
		var names = new arrayList();
		names.create(namesArray);

		expect(names.size()).to.equal(3);
		expect(names.get(0)).to.equal("wisdom");

	});

	it("can perform the map function and change every element based on a rule", function(){

		var namesWithoutHello = new arrayList("wisdom", "paul", "mercy", "carl");

		expect(namesWithoutHello.get(0)).to.equal("wisdom");

		var namesWithHello = namesWithoutHello.map(function(name){
			var newName = "Hello " + name;
			return newName;
		});

		expect(namesWithHello.size()).to.equal(4);
		expect(namesWithHello.get(0)).to.equal("Hello wisdom");

	});

	it("can compare two arraylist for equality", function(){

		var firstArray = new arrayList("wisdom", "pan", "dam");
		var secondArray = new arrayList("pan", "wisdom", "dam");
		var thridArray = new arrayList("wisdom", "pan", "dam");

		expect(firstArray.isEqualTo(secondArray)).to.equal(false);
		expect(firstArray.isEqualTo(thridArray)).to.equal(true);

	});

});