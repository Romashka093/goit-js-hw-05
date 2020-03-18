"use strict";

console.warn("COUNTER");

const ref = {
  incBtn: document.querySelector('button[data-action="increment"]'),
  decBtn: document.querySelector('button[data-action="decrement"]'),
  countValue: document.querySelector(".js-counter")
};

const Counter = function({ initialValue = 0, step = 0 }) {
  this.value = initialValue;
  this.step = step;
};

Counter.prototype.increment = function() {
  this.value += this.step;
};

Counter.prototype.descriment = function() {
  this.value -= this.step;
};
const counter = new Counter({ initialValue: 0, step: 1 });

const updateCountValue = () => {
  ref.countValue.textContent = counter.value;
};

ref.incBtn.addEventListener("click", () => {
  counter.increment();
  updateCountValue();
});

ref.decBtn.addEventListener("click", () => {
  counter.descriment();
  updateCountValue();
});
