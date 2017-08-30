// spec/bmi_ui_spec.js

describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#weight').val('90');
    $('#height').val('186');
    $('#calculate_metric').trigger('click');
    $('#weight_st').val('14');
    $('#weight_lb').val('2');
    $('#height_f').val('6');
    $('#height_i').val('1');
    $('#calculate_imp').trigger('click');
  });

  it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 26.01');
  });

  it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Overweight');
  });

  it("displays BMI Value from Imperial calculations", function() {
      expect($('#display_value_2').text()).toBe('Your BMI is 26.12');
  });

  it("displays BMI Message from Imperial calculations", function() {
    expect($('#display_message_2').text()).toBe('and you are Overweight');
  });

});
