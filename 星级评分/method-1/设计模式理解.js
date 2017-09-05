var Beverage = function(){};
Beverage.prototype.boilWater = function(){
	
}


var Coffee = function(){};
Coffee.prototype.boilWater = function(){
	console.log('把水煮沸')
};
Coffee.prototype.brewCoffee = function(){
	console.log('沸水冲泡')
}
Coffee.prototype.pourInCup = function(){
	console.log('倒入杯子')
}
Coffee.prototype.addSuger = function(){
	console.log('加糖')
}
//执行
Coffee.prototype.init = function(){
	this.boilWater();
	this.brewCoffee();
	this.pourInCup();
	this.addSuger();
}


var Tea = function(){}
	Tea.prototype.boilWater = function(){
		console.log('把水煮沸');
	}
	Tea.prototype.steepTea = function(){
		console.log('浸泡茶叶');
	}
	Tea.prototype.pourInCup = function(){
		console.log('倒入杯子')
	}
	Tea.prototype.addLemon = function(){
		console.log('加柠檬');
	}
 Tea.prototype.init = function(){
 	this.boilWater();
 	this.steepTea();
 	this.pourInCup();
 	this.addLemon();
 }

var coffee = new Coffee();
coffee.init();

var tea = new Tea();
tea.init();
