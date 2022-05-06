function matrixCreator(size){
    let matrix = []
    for (let i = 0; i < size; i++){
      matrix.push([])
      for (let j = 0; j < size; j++){
        if (i == j){
          matrix[i][j] = "x";  
        }
        else if (i + j == size-1){
          matrix[i][j] = "x";
        }
        else {
          matrix[i][j] = "-";
        }
      }
    }
    return matrix
  }

  function matrixCreatorDefault(){
    let  input = document.querySelector("input").value;
    let size = parseInt(input);
    let matrixArrays = matrixCreator(size)
    let matrixDiv = document.getElementById("matrix");
    matrixDiv.innerHTML = "";
    matrixArrays.forEach(function(innerArray){

        matrixDiv.innerHTML += innerArray + "</br>";
    });  
  }
  
