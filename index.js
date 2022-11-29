// Your code here
const dogger = document.getElementById('dodger')

document.addEventListener('keydown',function(e){
  console.log(e)
  if(e.key === 'ArrowLeft')
  {
    moveDodgerLeft()
  }
  else if(e.key === 'ArrowRight'){
    moveDodgerRight()
  }

})

function moveDodgerLeft()
{
  const leftNumber = dogger.style.left.replace('px','')
  const left = parseInt(leftNumber,10)
  if(left>0)
  dogger.style.left = `${left -1}px`

}


function moveDodgerRight(){
  const leftNumber = dogger.style.left.replace('px','')
  const left = parseInt(leftNumber,10)
  if(left<360)
  dogger.style.left = `${left +1}px`

}