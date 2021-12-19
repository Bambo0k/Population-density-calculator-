function render() {
    const region = document.getElementById('region').value;
    const pdensity = populationdensity();
    const text = `
      В регионе ${region} плотность населения составит ${pdensity}человек на км².
      `;
    document.getElementById('result').innerHTML = text;
  }