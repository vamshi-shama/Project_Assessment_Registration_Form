let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile').value
    let male = document.getElementById('male').checked
    let female = document.getElementById('female').checked
    let others = document.getElementById('others').checked
    let country = document.getElementById('country').value
    let error = false

    if(isSubmitted) {
		globalIsSubmitted = true
	}

    if(globalIsSubmitted){
        if (firstName.length >= 3 && firstName.match(/^[A-Za-z]+$/)) {
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        } else {
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
            error = true
        }
    
        if (lastName.length >= 3 && lastName.match(/^[A-Za-z]+$/)) {
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none'
        } else {
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
            error = true
        }
    
        if (
            email.includes("@") &&
            email.indexOf(" ") !=0 &&
            email.includes(".") &&
            email.indexOf("@") != 0 &&
            email.length - email.lastIndexOf(".") >= 3 &&
            email.length - email.lastIndexOf(".") < 5
        ) {
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
        } else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";
            error = true
        }
    
        if (mobile.length ===10 && !isNaN(mobile)) {
            document.getElementById('mobile-valid').style.display = 'block'
            document.getElementById('mobile-invalid').style.display = 'none'
        } else {
            document.getElementById('mobile-invalid').style.display = 'block'
            document.getElementById('mobile-valid').style.display = 'none'
            error = true
        }
        
        if (male || female || others) {
            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'
        } else {
            document.getElementById('gender-invalid').style.display = 'block'
            document.getElementById('gender-valid').style.display = 'none'
            error = true
        }

        if (country != 'Choose') {
            document.getElementById('country-valid').style.display = 'block'
            document.getElementById('country-invalid').style.display = 'none'
        } else {
            document.getElementById('country-invalid').style.display = 'block'
            document.getElementById('country-valid').style.display = 'none'
            error = true
        }

        if(!error && isSubmitted) {
			alert('Your details have been saved successfully!')

			document.getElementById('registration-form').reset()

			let validFeedbacks = document.getElementsByClassName('valid-feedback')
			for(let i = 0; i < validFeedbacks.length; i++) {
				validFeedbacks[i].style.display = 'none'
			}
			let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
			for(let i = 0; i < invalidFeedbacks.length; i++) {
				invalidFeedbacks[i].style.display = 'none'
			}
		}
    }
}