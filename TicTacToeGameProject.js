alert("Welcome to Tic Tac Toe!")

var restart = document.querySelector('#button');


var squares = document.querySelectorAll("td");



function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click',clearBoard)




function PutOnParameters(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};


for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', PutOnParameters);
}
