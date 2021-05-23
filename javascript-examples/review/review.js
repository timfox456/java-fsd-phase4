
// Comments
/* This is a comment */

// Variables

var x = 10;  // Setting a variable
var y = "this is a string";

var z = x + 10

var abc = y + " and this is also a string."


// Numbers

var a = 10;
var b = 10.2;
var c = 3.14;


// Boolean

var true_or_false = true;
var is_a_equal_to_10 = a == 10;

// Strings

var string1 = 'test-string';
var string2 = "test-string2";
var string3 = "This string has embedded 'single quotes'"
var string4 = 'This string has embedded "double quotes"'
var string5 = 'This string has \'escaped\` single quotes.'


// Date
var mydate = new Date(2021, 5, 22, 10, 22, 30, 0)

// Arrays

var mycars = ["Ford", "Chrysler", "Chevrolet", "Honda", "Toyota"]
var mynumbers = [10,20,30,40,50]
var myobjects = [10, "Ford", mycars]

// Math

Math.round(10.234)
Math.max(10,20)

// Objects

var my_object = {my_property : "abc", my_property2 : "xyz", my_array : mycars}


// JSON

var person = {name : "Tim", grades = [10,30,50,60] }

// Classes
class Car  {
    name
    year
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    drive() {
        alert("Driving now")
    }

}


class Model extends Car {
    constructor(brand, mod) {
        this.brand = brand;
        this.model = model;
    }
    get brandname() {
        return this.brand;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }

    drive() {
        super().drive()
        alert("Driving in model " + this.model)

    }
}

let my_car = new Car("Honda", 2020)
let my_other_car = new Car("Ferrari", 2021)
my_car.name 
my_car.year

let my_model_car = new Model("Ford", "Mustang")
// Encapsulation, Inheritance, and Polymorphism


my_model_car.brandname()

my_car = my_model_car

var my_garage_of_cars = [my_car, my_other_car, my_model_car]





