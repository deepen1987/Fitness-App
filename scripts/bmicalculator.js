export const bmiUs = document.getElementById("us");
export const bmiMetric = document.getElementById("metric");
export const bmiHeight1 = document.getElementById("height-1");
export const bmiHeight2 = document.getElementById("height-2");
export const bmiWeight = document.getElementById("weight");
let bmiRes = document.querySelector(".result-bmi");

export function calculateBmi() {
  resetInput();
  if (bmiMetric.checked === true) {
    let heightInMeter = bmiHeight1.value * 0.01;
    let bmi = bmiWeight.value / heightInMeter ** 2;

    let bmiOut = `<p color = "white">Your BMI is: ${bmi.toFixed(2)}</>`;
    if (bmiRes.firstChild) {
      bmiRes.removeChild(bmiRes.firstChild);
    }
    bmiRes.insertAdjacentHTML("beforeend", bmiOut);
    bmiResult(bmi);
  }
  if (bmiUs.checked === true) {
    let heightInMeter =
      (bmiHeight1.value * 12 + parseFloat(bmiHeight2.value)) * 0.0254;
    let weightInKg = bmiWeight.value * 0.453592;
    let bmi = weightInKg / heightInMeter ** 2;

    let bmiOut = `<p color = "white">Your BMI is: ${bmi.toFixed(1)}</>`;
    if (bmiRes.firstChild) {
      bmiRes.removeChild(bmiRes.firstChild);
    }
    bmiRes.insertAdjacentHTML("beforeend", bmiOut);

    document.querySelector(".result-bmi").addEventListener("mouseover", () => {
      bmiResult(bmi);
    });
    document.querySelector(".result-bmi").addEventListener("mouseout", () => {
      bmiResult();
    });
  }
}

export function bmiM() {
  bmiHeight2.value = 0;
  bmiHeight2.classList.add("hide");
  bmiHeight2.nextElementSibling.classList.add("hide");

  bmiHeight1.nextElementSibling.innerHTML = "cm";
  bmiWeight.nextElementSibling.innerHTML = "kg";
  calculateBmi();
}

export function bmiU() {
  bmiHeight2.classList.remove("hide");
  bmiHeight2.nextElementSibling.classList.remove("hide");

  bmiHeight1.nextElementSibling.innerHTML = "feet";
  bmiWeight.nextElementSibling.innerHTML = "lbs";
  calculateBmi();
}

function verify(inputField) {
  return isNaN(inputField) || inputField.trim() === "" || inputField < 0;
}

function resetInput() {
  if (verify(bmiHeight1.value)) {
    bmiHeight1.value = 5;
  }
  if (verify(bmiHeight2.value)) {
    bmiHeight2.value = 9;
  }
  if (verify(bmiWeight.value)) {
    bmiWeight.value = 100;
  }
}

function bmiResult(bmi) {
  document.getElementById("underweight").classList.remove("bmi-highlight");
  document.getElementById("normal").classList.remove("bmi-highlight");
  document.getElementById("overweight").classList.remove("bmi-highlight");
  document.getElementById("obese").classList.remove("bmi-highlight");
  if (bmi < 18.5) {
    document.getElementById("underweight").classList.add("bmi-highlight");
  } else if (bmi < 25) {
    document.getElementById("normal").classList.add("bmi-highlight");
  } else if (bmi < 30) {
    document.getElementById("overweight").classList.add("bmi-highlight");
  } else if (bmi > 29.9) {
    document.getElementById("obese").classList.add("bmi-highlight");
  }
}
