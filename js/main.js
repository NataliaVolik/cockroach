var messageBox = {}; //creating #object | создаю #объект
messageBox.width = document.getElementById('block').offsetWidth;  //assign #object property | #свойство объекта

var cockroach = {};
cockroach.width = document.getElementById('imgCockroach').offsetWidth;
cockroach.height = document.getElementById('imgCockroach').offsetHeight;
cockroach.stepX = Math.round(messageBox.width / 100 * 10); //3.7
cockroach.maxLeftPositionX = Math.round(messageBox.width / 100 * 3 + cockroach.stepX);
cockroach.maxRightPositionX = Math.round((messageBox.width / 100 * (100 - 3)) - cockroach.width - 2 * cockroach.stepX);
cockroach.middlePositionX = Math.round(messageBox.width / 2 - cockroach.width / 2);
cockroach.vectorX = -1;
cockroach.currentPositionX = cockroach.middlePositionX;
cockroach.htmlObject = document.getElementById('imgCockroach');

cockroach.moveX = function(){ //anonymous function | анонимная функция
    if(this.currentPositionX >= this.maxRightPositionX          //javascript IF .. ELSE operator | Оператор IF .. ELSE
        || this.currentPositionX <= this.maxLeftPositionX){
        this.vectorX *=  -1;
    }

    var newPosition = this.currentPositionX + (this.stepX * this.vectorX); //Javascript this keywork | Ключевое слово this (относится к javascript-объекту)
    //console.log("Old cockroach position = %d; new cockroach position = %d", this.currentPositionX, newPosition); //для отладки
    this.currentPositionX = newPosition;

    this.htmlObject.style.marginLeft = newPosition + 'px';
    //console.log("Moved cocroach to new position: %d px", newPosition); //для отладки
};

function moveCockroach(){ //wrapper-function for executing throu setInterval | функция-обвертка для исполнения через setInterval
    cockroach.moveX();
}

window.onload = function(){ // javascript onload event | подписка на событие onload
    setInterval(moveCockroach, 400); //loop function |Функция защикливания
};



//setInterval(function(){
//    console.log("Функция автоматически выполнилась!");
//}, 1000);


//javascript function
//javascript object
//javascript array
//javascript if
//javascript for


//var noteWidth = 941;//getBlockWidth();
//var cockroachWidth = 95;
//var cockroachLeftPositionX = noteWidth / 100 * 3; //todo: add round function here
//var cockroachRightPositionX = noteWidth / 100 * (100 - 3); //todo: add round function here
//var cockroachMiddlePositionX = noteWidth / 2 - cockroachWidth / 2; //todo: add round function here
//var cockroachMoveStepX = noteWidth / 100 * 3.7; //todo: add round function here


//function doMove(x){
//    var cockroach = document.getElementById('imgCockroach');
//    cockroach.style.marginLeft = x + 'px';
//}
//
//
//
//
//
//
//
//
//function getBlockWidth(){
//    var block = document.getElementsByClassName('block');
//    for (var i = 0; i < block.length; i++){
//        return block[i].offsetWidth;
//    }
//
//}


//
//for (var i = 0; i < 10; i++){
//    doMove(cockroachMiddlePositionX + cockroachMoveStepX * i)
//}



//var lesha = {};
//lesha.age = 26;
//lesha.name = "Алексей";
//lesha.sayAge = function(){
//    console.log("Возраст объекта \"%s\": %d лет", this.name, this.age);
//};

