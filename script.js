let count = JSON.parse(localStorage.getItem('store')) || {
  Wins: 0,
  Losses: 0,
  Tie:0
};

  function winOrLose(pickedValue)
  {
    let compNum=compValue();
    let result = '';

    if(compNum === pickedValue)
      result = 'Tie';
    else if(compNum === 'Rock')
    {
      if(pickedValue === 'Scissor')
      result = 'You Lose';
      else if(pickedValue === 'Paper')
      result = 'You Win';
    }
    else if(compNum === 'Paper')
    {
      if(pickedValue === 'Rock')
      result = 'You Lose';
      else if (pickedValue === 'Scissor')
      result = 'You Win';
    }
    else if(compNum === 'Scissor')
    {
      if(pickedValue === 'Paper')
      result = 'You Lose';
      else if(pickedValue === 'Rock')
      result = 'You Win';
    }

    if(result == 'You Win')
      count.Wins += 1;
    else if(result == 'You Lose')
      count.Losses += 1;
    else if(result == 'Tie')
      count.Tie +=1;
     localStorage.setItem('store' , JSON.stringify(count));

     document.querySelector('.js-score').innerHTML = `Wins : ${count.Wins} Losses : ${count.Losses} Tie : ${count.Tie}`;

     document.querySelector('.js-status').innerHTML = `You picked :   <img src="./images/${pickedValue}.png" class="result">    <img src="./images/${compNum}.png" class="result"> :   Computer picked`;

     document.querySelector('.js-result').innerHTML = `RESULT :  ${result}`;
    
  }
  function compValue(){

  const randNum = Math.random();

  if(randNum>=0 && randNum<=1/3)
  return 'Rock';
  else if(randNum>=1/3 && randNum<=2/3)
  return 'Paper';
  else if(randNum>=2/3 && randNum<=1)
  return 'Scissor';
  }
