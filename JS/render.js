function render() {
    const population = document.getElementById('population').value;
    const area = document.getElementById('area').value;
    const region = document.getElementById('region').value;
    const pdensity = populationdensity(population, area);
    if (!population) {
      document.getElementById('banpopulation').innerHTML = "Введите данные!";
    }
    else if (!area) {
      document.getElementById('banarea').innerHTML = "Введите данные!";
    }
      document.getElementById('result').innerHTML = text(region, pdensity);
}
function text(a, b) {  
  return `В регионе ${a} плотность населения составит ${b} человек на км².`;
}