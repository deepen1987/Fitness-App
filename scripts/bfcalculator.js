export const female = document.getElementById("female");
export const male = document.getElementById("male");
export const feet = document.getElementById("feet");
export const inch = document.getElementById("inch");
export const bfWeight = document.getElementById("bf-weight");
export const waist = document.getElementById("waist");
export const hip = document.getElementById("hip");
export const neck = document.getElementById("neck");
let bfRes = document.querySelector(".result-bf");

export function calculateBFat() {
  resetInput();
  const heightInInch = (feet.value * 12 + parseInt(inch.value)) * 2.54;
  if (male.checked === true) {
    let bFat =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist.value * 2.54 - neck.value * 2.54) +
          0.15456 * Math.log10(heightInInch)) -
      450;
    bfOutRes(bFat);
  }
  if (female.checked === true) {
    let bFat =
      495 /
        (1.29579 -
          0.35004 *
            Math.log10(
              parseFloat(waist.value * 2.54) +
                parseFloat(hip.value * 2.54) -
                neck.value * 2.54
            ) +
          0.221 * Math.log10(heightInInch)) -
      450;
    bfOutRes(bFat);
  }
  document.querySelector("#bfout").addEventListener("mouseover", () => {
    document.querySelector(".bf-details").classList.remove("hide");
  });
  document.querySelector("#bfout").addEventListener("mouseout", () => {
    document.querySelector(".bf-details").classList.add("hide");
  });
}

export function bfMale() {
  document.getElementById("hip-sec").classList.add("hide");
  calculateBFat();
}

export function bfFemale() {
  document.getElementById("hip-sec").classList.remove("hide");
  calculateBFat();
}

function verify(inputField) {
  return isNaN(inputField) || inputField.trim() === "" || inputField < 0;
}

function resetInput() {
  if (verify(feet.value)) {
    feet.value = 5;
  }
  if (verify(inch.value)) {
    inch.value = 9;
  }
  if (verify(waist.value)) {
    waist.value = 27;
  }
  if (verify(hip.valu)) {
    hip.value = 36;
  }
  if (verify(bfWeight.value)) {
    bfWeight.value = 121;
  }
  if (verify(neck.value)) {
    neck.value = 12;
  }
}

function bfOutRes(bFat) {
  let fMass = (bFat / 100) * bfWeight.value;
  let lMass = bfWeight.value - fMass;
  let bfOut = `<div id="bfout"><p color = "white" >Body Fat: ${bFat.toFixed(
    0
  )}%</p>
      <p>Fat Mass: ${fMass.toFixed(0)} lbs</p>
      <p>Lean Mass: ${lMass.toFixed(0)} lbs</p></div>`;
  if (bfRes.firstChild) {
    bfRes.removeChild(bfRes.firstChild);
  }
  bfRes.insertAdjacentHTML("beforeend", bfOut);
}
