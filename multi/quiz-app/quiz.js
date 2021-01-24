/**
 * @author: Pablo Acereda
 */
// TODO: Mark corrent/incorrect answers
$(document).ready(function() {
    let answers = {};

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
     *
     *  @param {number} id: Question identifier.
     *  @param {number} answer: Correct answer option.
     *  @param {string} question: Question definition.
     *  @param {object} options: Possible answers.
     */
    const createQuestionCard = (id, answer, question, options) => {
        // Create section
        const sectionId = 'section-' + id;
        const section = '<section class="quiz-item" id="' + sectionId + '"> </section>';
        $(section).insertBefore('#submit-section');

        // Include question
        const questionTitle = '<h3>' + question + '</h3>';
        $('#' + sectionId).append(questionTitle);

        // Answer
        answers['q' + id] = answer;

        // Include opt1ons
        let counter = 1;
        for (let opt in options) {
            const optionDiv = 
                '<div class="option-wrapper"> <label>' + 
                  '<input type="radio" required name=q' + id + ' value="' + counter + '"/>' +
                  '<p>' + options[opt] + '</p>' +
                '</label> </div>';

            $('#' + sectionId).append(optionDiv);
            counter++;
        }
    };

    /**
     * Check answers and show the final score of the quiz.
     */
    const submit = $('#btn-submit');
    submit.on('click', () => {
        let rightCount = 0;
        const score = $('#score-count');
        const selectedOptions = $('input:radio').each((pos, elem) => {
            let isChecked = elem.checked;
            let questionAnswer = answers[elem.name];
            let checkedOption = elem.value;

            // Removes answer classes in case there was a previous try
            elem.classList.remove('correct-answer');
            elem.classList.remove('incorrect-answer');

            if (isChecked) {
                if (questionAnswer == checkedOption) {
                    console.log('correct');
                    elem.classList.add('correct-answer');
                    rightCount += 1;
                } else {
                    console.log('incorrect');
                    elem.classList.add('incorrect-answer');
                }
            }
        });

        // Update score
        score.text(rightCount);
    });
});

