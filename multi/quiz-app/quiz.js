$(document).ready(function() {
    const getQuestions = new Promise((resolve, reject) => {
        $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', (data) => {
            resolve(data);
        }).fail(err => {
            reject(new Error('Call failed for GET Quiz Questions with status ${err.status}'));
        });
    });

    getQuestions
    .then(response => {
        let data = response;
        for (let pos = 0; pos < data.length; pos++) {
            createQuestionCard(
                data[pos].id,
                data[pos].answer,
                data[pos].question,
                data[pos].options
            );
        }
    })
    .catch(err => {
        console.error('Call failed ==> ${err}');
    });

    const createQuestionCard = (id, answer, question, options) => {
        // Create section
        const sectionId = 'section-' + id;
        const section = '<section class="quiz-item" id="${sectionId}"> </section>';
        $('#quiz').append(section);

        // Include question
        const questionTitle = '<h3>${question}</h3>';
        $('#' + sectionId).append(questionTitle);

        // Include opt1ons
        let counter = 1;
        for (let opt in options) {
            const optionDiv = 
                '<div class="option-wrapper"> <label>' + 
                  '<input type="radio" required name=q${id} value="${counter}">' +
                  '<p>${opt}</p>' +
                '</label> </div>';

            $('#' + sectionId).append(optionDiv);
            counter++;
        }


    };

    // TODO: Interaction for clicked
    // TODO: Check results
});
