function render() {
    const population = document.getElementById('population').value;
    const area = document.getElementById('area').value;
    const region = document.getElementById('region').value;
    const pdensity = populationdensity();
    const text = `
    В регионе ${region} плотность населения составит ${pdensity} человек на км².
    `;
    if (population && area) {
      document.getElementById('banpopulation').innerHTML = "Введите данные!";
    }
  document.getElementById('result').innerHTML = text;
  function populationdensity() {
    return population / area ;
  }
}