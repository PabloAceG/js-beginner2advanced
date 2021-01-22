/**
 * @author: Pablo Acereda
 */
$(document).ready( () => {
   
    // Regular expressions for check form's fields content
    const firstCapitalRegex  = /^[A-Z]{1}[a-z]*/g;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    // --- First Step ---
    /**
     * Checks step one's form and goes to step two if everything is correct.
     */
    const stepOneNextBtn = $('#StepOneNext');
    stepOneNextBtn.on('click', () => {
        let allComplete = true;
        const emptyText = 'This field cannot be empty';
        // Form fields
        const firstName = $('#first_name').val();
        const lastName  = $('#last_name').val();
        const email     = $('#email').val();

        // Check FIRST_NAME content 
        if (firstName !== '') {
            if (!firstCapitalRegex.test(firstName)) {
                allComplete = false;
                $('#first_name_error').show();
                $('#first_name_empty').hide();
            } else {
                $('#first_name_error').hide();
                $('#first_name_empty').hide();
            }
        } else {
            allComplete = false;
            $('#first_name_error').hide();
            $('#first_name_empty').show();
        }

        // Check LAST_NAME content
        // Clear regex.lastIndex buffer
        firstCapitalRegex.test('');
        if (lastName !== ''  && !firstCapitalRegex.test(lastName)) {
            allComplete = false;
            $('#last_name_error').show();
        } else {
            $('#last_name_error').hide();
        }
        
        // Check EMAIL content
        console.log(email);
        console.log(emailRegex.test(email));
        emailRegex.test('');
        if (email !== '') {
            if (emailRegex.test(email)) {
                $('#email_error').hide();
                $('#email_empty').hide();
            } else {
                allComplete = false;
                $('#email_error').show();
                $('#email_empty').hide();

            }
        } else {
            allComplete = false;
            $('#email_error').hide();
            $('#email_empty').show();
        }

        // Can show next content
        if (allComplete) {
            $('#StepOneContainer').hide();
            $('#StepTwoContainer').show();
        }
    });

    // --- Second Step ---
    /**
     * Goes back from step two to step one.
     */
    const stepTwoPrevious = $('#StepTwoPrevious');
    stepTwoPrevious.on('click', () => {
        $('#StepOneContainer').show();
        $('#StepTwoContainer').hide();
    });

    /**
     * Checks step two's form and goes to step three if everything is correct.
     */
    const stepTwoNext = $('#StepTwoNext');
    stepTwoNext.on('click', () => {
        let allComplete = true;
        // Form fields
        const contact = $('#contact').val();
        const city    = $('#city').val();
        const country = $('#country').val();
        
        // Check CONTACT content (mandatory)
        if (contact !== '') {
            if (phoneRegex.test(contact)) {
                $('#contact_empty').hide();
                $('#contact_error').hide();
            } else {
                allComplete = false;
                $('#contact_empty').hide();
                $('#contact_error').show();
            }
        } else {
            allComplete = false;
            $('#contact_empty').show();
            $('#contact_error').hide();
        }

        // Check CITY content
        // Clear regex.lastIndex buffer
        firstCapitalRegex.test('');
        if (city !== ''  && !firstCapitalRegex.test(city)) {
            allComplete = false;
            $('#city_error').show();
        } else {
            $('#city_error').hide();
        }

        // Check COUNTRY content (mandatory)
        // Clear regex.lastIndex buffer
        firstCapitalRegex.test('');
        if (country !== '') {
            if (firstCapitalRegex.test(country)) {
                $('#country_empty').hide(); 
                $('#country_error').hide(); 
            } else {
                allComplete = false;
                $('#country_empty').hide(); 
                $('#country_error').show(); 
            }
        } else {
            allComplete = false;
            $('#country_empty').show();
            $('#country_error').hide();
        }

        // Can show next content
        if (allComplete) {
            $('#StepTwoContainer').hide();
            $('#StepThreeContainer').show();
        }

    });

    // --- Third Step ---
    /**
     * Goes back from step three to second step.
     */
    const stepThreePrevious = $('#StepThreePrevious');
    stepThreePrevious.on('click', () => {
        $('#StepTwoContainer').show();
        $('#StepThreeContainer').hide();
    });

    /**
     * Check step three fields and finishes form.
     */
    const stepThreeSubmit = $('#StepThreeSubmit');
    stepThreeSubmit.on('click', () => {
        let allComplete = true;
        // Form fields
        const program = $('#select_program').val();
        const message = $('#message').val();

        // Check SELECT_PROGRAM content (mandatory)
        if (program !== '') {
            $('#select_program_error').hide();
        } else {
            allComplete = false;
            $('#select_program_error').show();
        }

        // Check MESSAGE content (mandatory)
        if (message !== '') {
            $('#message_error').hide();
        } else {
            allComplete = false;
            $('#message_error').show();
        }
        
        // Can show next content
        if (allComplete) {
            $('#StepThreeContainer').hide();
            $('#SuccessContainer').show();
        }

    });
});

