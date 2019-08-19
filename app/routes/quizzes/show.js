import Route from '@ember/routing/route';
import { assign } from '@ember/polyfills';

export default Route.extend({
  model(params) {
    // Without this viewing the quiz directly breaks. Remove me when server runs
    const { quizzes } = assign(this.modelFor('quizzes'), this.modelFor('quizzes.index'));

    const quiz = quizzes.filter((q) => q.id == params.quiz_id).firstObject;
    const { questions } = this.questionRecords();

    return { quiz, questions };
  },

  // TODO: Save these as records
  questionRecords() {
    return {
      "questions": [
        {
          "id": 1,
          "question": "What is the second largest country (total area)?",
          "answers": [
            "United States",
            "Russia",
            "Canada",
            "China"
          ],
          "correct_answer": 2
        },
        {
          "id": 2,
          "question": "What is the most common language?",
          "answers": [
            "English",
            "Hindi",
            "Spanish",
            "Mandarin"
          ],
          "correct_answer": 3
        },
        {
          "id": 3,
          "question": "What is the largest ocean?",
          "answers": [
            "Pacific Ocean",
            "Southern Ocean",
            "Indian Ocean",
            "Atlantic Ocean"
          ],
          "correct_answer": 0
        },
        {
          "id": 4,
          "question": "What is the diameter of Earth (nearest km)?",
          "answers": [
            "12,802km",
            "12,734km",
            "31,243km",
            "6,938km"
          ],
          "correct_answer": 1
        },
        {
          "id": 5,
          "question": "Which of these countries is the smallest (population)?",
          "answers": [
            "Vatican City",
            "Tokelau",
            "Cocos Keeling Islands",
            "Christmas Island"
          ],
          "correct_answer": 2
        }
      ]
    };
  }
});
