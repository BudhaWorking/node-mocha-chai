var assert = require("chai").assert;
var expect = require("chai").expect,
should = require("chai").should(),
supertest = require("supertest"),

server = supertest.agent("http://localhost:8002/api")


//describe.only("My second test case", function(){
		
/*
	it("My first test case", function(){
			console.log("This is my first test case")
	})
	it.only("My second test case", function(){
			console.log("This is my second test case")
	})
	it("My third test case", function(){
			console.log("This is my third test case")
	})*/

	/*it("My first test case", function(){
		var foo ="abhi";
		var tea={
			flavors:"sweet"
		};
		
		//assert.typeOf(foo,'string')

		//expect(foo).to.be.a("string");

		foo.should.be.a('string');
		foo.should.equal('abhi')
		foo.should.have.lengthOf(4)
		tea.should.have.property('flavors')
	})

	})*/

describe("Testin customer", function(){

		it("should get all customer", function(done){

		server.get("/custmors")
		.expect(200)
		.expect('content-type', /json/)
		.end(function(err, res){
			console.log(res.body);
			res.body.forEach(function(data){
				data.should.have.property("name")
				data.name.should.equal("Aditya")
			})
			done();
		})
		})
})


/*describe("This is my Test suite", function(){
		before("Before hook", function(){
			console.log("This is before hook")
		})
		after("After hook", function(){
			console.log("This is after hook")
		})
		beforeEach("This is Before Each", function(){
			console.log("This is before each hook")
		})
		afterEach("This is After Each", function(){
			console.log("This is after each hook")
		})

	it("My first test case", function(){
			console.log("This is my first test case")
	})
	it("My second test case", function(){
			console.log("This is my second test case")
	})
	it("My third test case", function(){
			console.log("This is my third test case")
	})
})*/