var messageBox = {};
messageBox.width = document.getElementById('block').offsetWidth;

var cockroach = {};
cockroach.width = document.getElementById('imgCockroach').offsetWidth;
cockroach.height = document.getElementById('imgCockroach').offsetHeight;
cockroach.stepX = Math.round(messageBox.width / 100 * 10); //3.7
cockroach.maxLeftPositionX = Math.round(messageBox.width / 100 * 3 + cockroach.stepX);
cockroach.maxRightPositionX = Math.round((messageBox.width / 100 * (100 - 3)) - cockroach.width - 3 * cockroach.stepX);
cockroach.middlePositionX = Math.round(messageBox.width / 3 - cockroach.width / 3);
cockroach.vectorX = -1;
cockroach.currentPositionX = cockroach.middlePositionX;
cockroach.htmlObject = document.getElementById('imgCockroach');

cockroach.moveX = function(){
    if(this.currentPositionX >= this.maxRightPositionX
        || this.currentPositionX <= this.maxLeftPositionX){
        this.vectorX *=  -1;
    }

    var newPosition = this.currentPositionX + (this.stepX * this.vectorX);
    this.currentPositionX = newPosition;

    this.htmlObject.style.marginLeft = newPosition + 'px';
    //console.log("Moved cocroach to new position: %d px", newPosition); //для отладки
};

function moveCockroach(){
    cockroach.moveX();
}

window.onload = function(){
    setInterval(moveCockroach, 400);
};


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



