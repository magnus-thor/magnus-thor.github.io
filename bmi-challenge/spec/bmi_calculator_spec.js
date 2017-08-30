// spec/bmi_calculator.js

describe("BMICalculator", function() {
  var calculator;
  var person;

beforeEach(function() {
  person = new Person({weight: 90, height: 186});
  calculator = new BMICalculator();
  person_imp = new Person({weight_st: 14, weight_lb: 2, height_f: 6, height_i: 1});
  calculator_imp = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator_imp.imperial(person_imp);
    expect(person_imp.bmiValue).toEqual(26.12)
  });
});
