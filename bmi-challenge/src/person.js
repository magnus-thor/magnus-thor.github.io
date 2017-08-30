// src/person.js

function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_st = attr.weight_st;
  this.weight_lb = attr.weight_lb;
  this.height_f = attr.height_f;
  this.height_i = attr.height_i;

  Person.prototype.calculate_bmi = function() {
    calculator = new BMICalculator();
    calculator.metric_bmi(this);
  };

  Person.prototype.calculate_bmi_imp = function() {
    calculator_imp = new BMICalculator();
    calculator_imp.imperial(this);
  };
}
