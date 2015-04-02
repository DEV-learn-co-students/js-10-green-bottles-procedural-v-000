---
tags: variables, function expressions, strings, iteration, procedual programming, beginner
languages: javascript
---

# 10 Green Bottles Procedural
10 Green Bottles is Flatiron School's version of the time honored example program [99 Beer Bottles](http://www.99-bottles-of-beer.net/), which in turn is derived from the English nursery rhyme [Ten Green Bottles](http://en.wikipedia.org/wiki/Ten_Green_Bottles).

## Objective
Your assignment is to write a **procedual javascript** program that sings (i.e. prints) the [lyrics](http://www.kididdles.com/lyrics/t050.html) to the nursery rhyme 10 Green Bottles.

By **procedual javascript** we mean that your answer should break down the steps that need to be taken to print the nursery rhyme into a collection of variables, data structures and functions. For example:

```javascript
var familyMember = function(name){
  var familyName = 'Muhammed';
  console.log(name + ' ' + familyName);
}

```

Basically do not employ the use of javascript objects to solve this problem (even if you know how to). The next lab in this sequence will have you refactor your procedual code design into objects.

## Instructions
Write a `song` function expression that takes in a number argument called `numberOfBottles` and prints the correct number of verses/standazas for the given `numberOfBottles`

