//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //To access a property within an object

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      

  // 3) What is the difference between call and apply?

      

  // 4) What does .bind do?
    
    //binds a function to a specified variable
      


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: 'vannvaughan',
  email: 'vann.vaughan@yahoo.com',
  getUsername : function() {
    return this.username
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.miles = 0;
  this.move = 0;
  this.headline = this.maker + this.model;

  this.moveCar = function(distance) {
    return this.move += distance;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

var myCars = ['toyota', 'chevy']
var cars = [];
for (var i=0; i < myCars.length; i++) {
  cars.push(new Car(myCars[i]))
}


//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. 
//The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in 
//order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //The username or 'iliketurtles'.

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //The username or 'iliketurtles'.


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

