

function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age=document.getElementById('age').value;
    const result = document.getElementById('result');

    if (height === "" || weight === ""||age==="") {
        alert("Please fill all the fields");
    } else {
        const bmi = Math.ceil(weight / ((height / 100) ** 2));

        if (bmi < 18.5) {
            result.innerHTML = `<h2 class="text-center">${bmi} kg/m²</h2><h4 class="text-center text-info">Underweight</h4><p class="my-3">Focus on nutrient-dense foods to gain weight gradually. Regular exercise can help build muscle mass.</p>`;
        } else if (bmi < 25) {
            result.innerHTML = `<h2 class="text-center">${bmi} kg/m²</h2><h4 class="text-center text-success">Healthy</h4><p class="my-3">Maintain a balanced diet and regular physical activity to sustain overall health.</p>`;
        } else if (bmi < 30) {
            result.innerHTML = `<h2 class="text-center">${bmi} kg/m²</h2><h4 class="text-center text-warning">Overweight</h4><p class="my-3">Adopt healthy eating habits, increase physical activity, and consider consulting a healthcare professional for guidance.</p>`;
        } else {
            result.innerHTML = `<h2 class="text-center">${bmi} kg/m²</h2><h4 class="text-center text-danger">Obese</h4><p class="my-3">Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.</p>`;
        }
    }

   
   
}

function allclear(){
    height.value = "" 
     weight.value = "" 
      age.value=""
      result.innerHTML = ""
}
