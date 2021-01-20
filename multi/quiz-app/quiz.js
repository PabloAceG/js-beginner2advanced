$(document).ready(function() {
    let answers = [];

    /**
     *  GET Resquest to select all questions.
     */
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

    /**
     *  Creates a new question section.
     *  - id (number): Question identifier.
     *  - answer (number): Correct answer option.
     *  - question (string): Question definition.
     *  - options (array[string]): Possible answers.
     */
    const createQuestionCard = (id, answer, question, options) => {
        // Create section
        const sectionId = 'section-' + id;
        const section = '<section class="quiz-item" id="' + sectionId + '"> </section>';
        $('#quiz').append(section);

        // Include question
        const questionTitle = '<h3>' + question + '</h3>';
        $('#' + sectionId).append(questionTitle);

        // Answer
        answers.push(answer);

        // Include opt1ons
        let counter = 1;
        for (let opt in options) {
            const optionDiv = 
                '<div class="option-wrapper"> <label>' + 
                  '<input type="radio" required name=q' + id + ' value="' + options[opt] + '">' +
                  '<p>' + options[opt] + '</p>' +
                '</label> </div>';

            $('#' + sectionId).append(optionDiv);
            counter++;
        }
    };

    // Check answers
    const submit = $('#btn-submit');
    const score = $('#score-count');
    submit.on('click', () => {
        let counter = 0;
        let rightCount = 0;
        const selectedOptions = $('input:radio').each(() => {
            let isChecked = this.activeElement.checked;
            console.log(this.activeElement.checked);
            if (isChecked) {
                console.log('checked');
                if ( $(this).val() === answers[counter]) {
                    console.log('For tomorrow');
                } else {
                    console.log('For another day');
                }
            }

            counter++;
        });
       
        // Update score
        score.text(rightCount);
    });
});

