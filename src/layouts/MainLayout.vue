<template>
  <ul class="title">
    <li>
      <h2 class="title">TIP CALCULATOR</h2>
    </li>

    <li class="mode">
      <button class="switch" id="switch">
        <span><i class="fas fa-sun"></i></span>
        <span><i class="fas fa-moon"></i></span>
      </button>
    </li>
  </ul>

  <div class="check">
    <div class="tip-form">
      <input
        type="number"
        class="form-input"
        placeholder="Billed Amount"
        id="billedAmount"
        min="0"
        required />
      <input
        type="number"
        class="form-input"
        placeholder="Tip %"
        id="tipPercentage"
        min="0'" />
      <input
        type="number"
        class="form-input"
        placeholder="Number of People"
        id="numberPeople"
        pattern="[0-9]+" />
      <button class="form-btn" id="calculateBtn">Calculate</button>
    </div>

    <ul class="list-results">
      <li class="results-txt" id="ContainerTotal">
        Total:
        <p class="results" id="total">$0.00</p>
        <br />
      </li>

      <br />

      <li class="results-txt" id="ContainerTip">
        Tip:
        <p class="results" id="tip">$0.00</p>
        <br />
      </li>
    </ul>
  </div>

  <footer>
    <small
      >Made by
      <a class="linkedin" href="https://www.linkedin.com/in/victorlavalle/"
        >Víctor Lavalle</a
      >.
      <a href="https://github.com/VictorLavalle">
        <img
          alt="logo-github"
          class="logo-git"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQzOC41NDlweCIgaGVpZ2h0PSI0MzguNTQ5cHgiIHZpZXdCb3g9IjAgMCA0MzguNTQ5IDQzOC41NDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzOC41NDkgNDM4LjU0OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NQ0KCQljLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42Mw0KCQljMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2DQoJCWMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNg0KCQljLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkNCgkJYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5DQoJCWMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5Nw0KCQljLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTENCgkJYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNg0KCQljNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxDQoJCWMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYNCgkJYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3DQoJCWMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NA0KCQljNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5DQoJCWM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNA0KCQljMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5DQoJCWMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2DQoJCWM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NQ0KCQljNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2DQoJCUM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
      </a>
    </small>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  /* Variables */
  let billed = document.querySelector("#billedAmount");
  let tipPerc = document.querySelector("#tipPercentage");
  let people = document.querySelector("#numberPeople");

  const btnSwitch = document.querySelector("#switch");

  let total = document.getElementById("total");
  let tip = document.getElementById("tip");

  /* Functions */
  function calculate() {
    let TotalPerPerson = document.getElementById("TotalPerPerson");

    if (isNegative(billed.value)) {
      billed.value = billed.value * -1;
    }

    if (isNegative(tipPerc.value)) {
      tipPerc.value = tipPerc.value * -1;
    }

    if (isNegative(people.value)) {
      people.value = people.value * -1;
    }

    if (isHigherToTwo()) {
      let TextTotalPerPerson = "Total Per Person: ";
      let NumberTotalPer =
        "$" +
        CalculatePerPerson(
          CalculateTotalResult(),
          Math.round(people.value)
        ).toFixed(2);

      let TextTipPerPerson = "Tip Per Person: ";
      let NumberTipPer =
        "$" +
        CalculatePerPerson(CalculateTip(), Math.round(people.value)).toFixed(2);

      if (!TotalPerPerson) {
        CreateParagrahp("ContainerTotal", TextTotalPerPerson, "TotalPerPerson");
        CreateParagrahp(
          "ContainerTotal",
          NumberTotalPer,
          "NumberTotalPerPerson"
        );

        CreateParagrahp("ContainerTip", TextTipPerPerson, "TipPerPerson");
        CreateParagrahp("ContainerTip", NumberTipPer, "NumberTipPerPerson");
      }
      if (TotalPerPerson) {
        NumberTotalPerPerson.textContent = NumberTotalPer;
        NumberTipPerPerson.textContent = NumberTipPer;
        people.value = Math.round(people.value);
      }
    } else {
      if (TotalPerPerson) {
        DeleteParagrahp("TotalPerPerson");
        DeleteParagrahp("NumberTotalPerPerson");
        DeleteParagrahp("TipPerPerson");
        DeleteParagrahp("NumberTipPerPerson");
      }
    }

    people.value = Math.round(people.value);
    total.textContent = "$" + CalculateTotalResult();
    tip.textContent = "$" + CalculateTip();
  }

  //Toggle button for dark mode
  btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    //Save in localstorage.
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
  });

  //Get the current mood
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
  } else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
  }

  //Button calculate
  calculateBtn.addEventListener("click", (e) => {
    calculate(e);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      calculate(e);
    }
  });

  //Calculate Values
  function CalculateTotalResult() {
    let result;
    result = Number(billed.value) + Number(CalculateTip());
    result = Number(result).toFixed(2);
    return result;
  }

  function CalculateTip() {
    let tipResult = Number(billed.value) * Number(tipPerc.value / 100);
    tipResult = Number(tipResult).toFixed(2);
    return tipResult;
  }

  function CalculatePerPerson(ValueToCalculate, NumberPerson) {
    let Result;
    Result = Number(ValueToCalculate) / Number(NumberPerson);
    Result = Number(Result.toFixed(2));
    return Result;
  }

  function isHigherToTwo() {
    return Number(people.value) > 1;
  }

  function isNegative(ValueToCalculate) {
    if (ValueToCalculate < 0) {
      return Number(ValueToCalculate) < 0;
    }
  }

  //Create Elements

  function CreateParagrahp(idContainer, content, idElement) {
    let Container = document.getElementById(idContainer);
    const fragment = document.createDocumentFragment();
    let Paragrahp = document.createElement("p");
    Paragrahp.textContent = content;
    Paragrahp.setAttribute("id", idElement);
    Paragrahp.setAttribute("class", "results");
    fragment.appendChild(Paragrahp);
    Container.appendChild(Paragrahp);
  }

  function DeleteParagrahp(idElement) {
    let Paragrahp = document.getElementById(idElement);
    Paragrahp.parentNode.removeChild(Paragrahp);
  }
});
</script>

<style scoped lang="css">
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  transition: 0.2s;
}

body {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  background-color: whitesmoke;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body.dark {
  background-color: #121212;
}

.switch {
  background: #343d5b;
  border-radius: 1000px;
  border: none;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  margin-left: 80px;
}

.switch::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  background: #f1f1f1;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 100px;
  transition: 0.3s ease all;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
}

.switch.active::after {
  background: orange;
  color: #000;
}

.switch.active::after {
  right: 0;
  left: unset;
}

.mode span {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: block;
  background: none;
  color: #fff;
}

.title {
  text-align: center;
  display: flex;
  list-style: none;
}

body.dark .title {
  color: white;
}

.check {
  padding: 2rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(grey, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body.dark .check {
  background-color: rgb(36, 35, 35);
}

@media screen and (max-width: 800px) {
  .check {
    width: 80%;
  }
}

@media screen and (max-width: 800px) {
  .tip-form {
    display: flex;
    flex-direction: column;
  }
}

.tip-form > * {
  margin: 0 0.5rem;
}

@media screen and (max-width: 800px) {
  .tip-form > * {
    margin: 1rem;
  }
}

.form-input {
  font-size: 1rem;
  color: #555;
  padding: 0.5rem 1rem;
  border: 2px solid rgba(36, 34, 34, 0.637);
  border-radius: 10px;
  outline: none;
  width: 12rem;
}

.form-input:focus {
  border-color: #4caf50;
}

#tipPercentage::after {
  content: "%";
  padding-left: 5px;
}

body.dark .form-input {
  color: black;
  border-color: #3700b3;
}

body.dark .form-input:focus {
  color: black;
  border-color: #4caf50;
}

.form-btn {
  font-size: 1rem;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #3baf3f;
  cursor: pointer;
  outline: none;
}

.form-btn:hover {
  box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.1);
  background-color: #23d129;
}

.list-results {
  list-style-type: none;
  display: inline;
  padding-right: 5px;
}

.list-results-per {
  display: none;
}

.results-txt-per {
  display: inline;
  font-size: 2rem;
  font-weight: 100;
  color: #121212;
  margin-top: 3rem;
}

body.dark .results-txt-per {
  color: white;
}

.results-txt {
  display: inline;
  font-size: 2rem;
  font-weight: 100;
  color: #121212;
  margin-top: 3rem;
}

body.dark .results-txt {
  color: white;
}

.results {
  display: inline;
  font-size: 2rem;
  font-weight: 100;
  color: #4caf50;
  margin-top: 3rem;
}

@media screen and (max-width: 800px) {
  .results {
    margin-top: 2rem;
    font-size: 20px;
  }
  .results-txt,
  .results-txt-per {
    font-size: 20px;
  }

  .title {
    font-size: 22px;
  }
}

#TotalPerPerson,
#TipPerPerson {
  color: black;
}

body.dark #TotalPerPerson {
  color: white;
}

body.dark #TipPerPerson {
  color: white;
}

#NumberTotalPerPerson,
#NumberTipPerPerson {
  color: #4caf50;
}
small {
  text-align: center;
  color: #999;
  margin: 1rem;
}

@media screen and (max-width: 800px) {
  small {
    width: 70%;
  }
}

footer {
  font-size: 0.8rem;
  margin: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
}

.logo-git {
  width: 15px;
  height: 15px;
}

body.dark .logo-git {
  filter: invert(10);
}

.linkedin:hover {
  color: #2cd131ea;
}

body.dark .linkedin:hover {
  color: #2cd131ea;
}

a:link,
a:visited {
  color: #4caf50;
  text-decoration: none;
}

@keyframes slideDown {
  from {
    transform: translatey(-30px);
    opacity: 0;
  }

  to {
    transform: translatey(0);
    opacity: 1;
  }
}

.animate {
  animation: slideDown 1s;
}
</style>
