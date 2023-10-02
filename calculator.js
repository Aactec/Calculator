let input = document.getElementById('input')
        
function handleButtonPress(value){
  input.value += value;
}
function calculate(){
  try {
    const result = eval(input.value);
    input.value = result;
  } catch (error) {
      input.value = 'Error';
  }
}
function clearInput(){
  input.value = '';
}
function del(){
  input.value = input.value.slice(0,-1)
}