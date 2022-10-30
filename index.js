let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile').value
    let gender = document.getElementById('gender').checked
    let country = document.getElementById('first-name').value
    let error = false
    
    if(isSubmitted) {
		globalIsSubmitted = true
	}

    if(globalIsSubmitted){
        if (firstName.length >= 2) {
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        } else {
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
            error = true
        }
    
        if (lastName.length >= 2) {
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none'
        } else {
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
            error = true
        }
    
        if (
            email.includes("@") &&
            email.includes(".") &&
            email.indexOf("@") != 0 &&
            email.length - email.lastIndexOf(".") >= 3
        ) {
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
        } else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";
            error = true
        }
    
        let mobileNumber = parseInt(mobile)
        if (mobile.length === 10 && !isNaN(mobileNumber)) {
            document.getElementById('mobile-valid').style.display = 'block'
            document.getElementById('mobile-invalid').style.display = 'none'
        } else {
            document.getElementById('mobile-invalid').style.display = 'block'
            document.getElementById('mobile-valid').style.display = 'none'
            error = true
        }
        
        
        if (country) {
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