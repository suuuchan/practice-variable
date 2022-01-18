{
  'use strict'
  function makeAmida() {
      const canvas = document.getElementById('canvas');
      if (!canvas.getContext || !canvas){
          return;
      }
      const ctx = canvas.getContext('2d');
      const tree = 5;
      const treeHeight = 15;

      function random() {
          return Math.floor(Math.random() * 2);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'black';

      const redLine = [];
      let redPoint;

      for (let y = 1; y <= treeHeight; y++){
          redPoint = 0;
          redLine[y - 1] = [redPoint];

          for (let x = 1; x <= tree; x++){
              if (x === tree || random() === 0 || y === treeHeight){
                  redLine[y - 1][redPoint] = [0, 0];
                  redPoint++;

                  ctx.beginPath();
                  ctx.moveTo( 50 * x ,y * 30 );
                  ctx.lineTo( 50 * x ,((y + 1) * 30));
                  ctx.stroke();
              } else {
                  for (let t = 0; t < 2; t++){  
                      redLine[y - 1][redPoint]= [x, x + 1];
                      redPoint++;
                  }
                  ctx.beginPath();
                  ctx.moveTo( 50 * x, y * 30 );
                  ctx.lineTo( 50 * x,((y + 1) * 30));
                  ctx.lineTo( 50 * (x + 1),((y + 1) * 30));
                  ctx.moveTo( 50 * (x + 1), y * 30 );
                  ctx.lineTo( 50 * (x + 1),((y + 1) * 30));
                  ctx.stroke();
                  x++;
              }
          }
      }
      const undo = ctx.getImageData(0, 0, canvas.width, canvas.height); 

      ctx.strokeStyle = '#e65353';
      ctx.lineWidth = 3;

      for (let x = 1; x <= tree; x++){
          input = document.createElement('input');
          input.type = "submit";
          input.value = "たどる"

          input.addEventListener('click', () =>{
              ctx.putImageData(undo, 0, 0);                   
              r = x;                                                              

              for(let y = 1; y <= treeHeight; y++){
                      ctx.moveTo( 50 * x, y * 30 );
                  if(redLine[y - 1][x - 1][0] === x){ 
                      ctx.moveTo( 50 * x, y * 30 );
                      ctx.lineTo( 50 * x,((y + 1) * 30));
                      ctx.lineTo( 50 * (x + 1),((y + 1) * 30));
                      ctx.stroke();
                      x++;
                  } else if(redLine[y - 1][x - 1][1] === x){
                      ctx.beginPath();
                      ctx.moveTo( 50 * x, y * 30 );
                      ctx.lineTo( 50 * x,((y + 1) * 30));
                      ctx.lineTo( 50 * (x - 1),((y + 1) * 30));
                      ctx.stroke();
                      x--;
                  } else{
                      ctx.beginPath();
                      ctx.moveTo( 50 * x ,y * 30 );
                      ctx.lineTo( 50 * x ,((y + 1) * 30));
                      ctx.stroke();
                  }
              }
              x = r; 
          });
          document.body.appendChild(input);
      }
  }
  makeAmida();
}