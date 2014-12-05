//this would be in an external file


//integrator creates custom validation functions, or uses a prebuilt one
var phoneRegexValidatorFunc = function(val) {
    phoneRegex = ''; //insert phone regex or import it;
    if (val.match(phoneRegex)) return true
}
//and adds them
valigator.addValidateFunction('phoneRegexValidatorFunc', phoneValidatorFunc);


//below this line is form specific

var getPhoneNumber = function() {
	return $('#phone-number').val();
};

var phoneNumberRegexIsInvalidFunc = function() {
    //show regex specific error error
};

var phoneNumberRegexIsValidFunc = function() {
    //remove regex specific error
};

var phoneNumberRequiredIsInvalidFunc = function(){
	//add required specific error
};

var formIsInvalidFunc = function(){
	//disable submit button
};

var formIsValidFunc = function(){
	//enable submit button
};

var setupFormValidator = function() {
    var masterForm = new Valigator.Form();
    var addressForm = new Valigator.Form();
    form.addField('phoneNumber', getPhoneNumber);

    // note: order matters if throw one error per field only
    
    //phone - required
    form.fields.phoneNumber.addValidator('required', valigator.validationFuncs.required);
    form.fields.phoneNumber.validators.regex.onInvalid(phoneNumberRequiredIsInvalidFunc);
    //phone - regex
    form.fields.phoneNumber.addValidator('regex', valigator.validationFuncs.phoneRegexValidatorFunc);
    form.fields.phoneNumber.validators.regex.onInvalid(phoneNumberRegexIsInvalidFunc);

    //getAliases returns an array of strings
    form.addFieldList('aliases', getAliases);

    //adding a list
    //could just have addField accept an array, but I think this is more clear
    form.addChildForm('address');
    form.childForms.address.addField(/*  */);
    form.fields.addresses.addValidator('length');

    form.onInvalid(formIsInvalidFunc);
    form.onValid(formIsValidFunc);
}