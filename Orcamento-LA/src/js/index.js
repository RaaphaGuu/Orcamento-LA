function showInput(select) {
  if (select.value === 'Outros') {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'equipamento';
    input.placeholder = 'Digite o equipamento';
    document.getElementById('input-container').appendChild(input);
  } else {
    document.getElementById('input-container').innerHTML = '';
  }
}