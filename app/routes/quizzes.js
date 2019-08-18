import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      "quizzes": [
        {
          "id": 1,
          "title": "Quiz 1",
          "question_ids": [1, 2, 3]
        },
        {
          "id": 2,
          "title": "Quiz 2",
          "question_ids": [3, 4]
        },
        {
          "id": 3,
          "title": "Quiz 3",
          "question_ids": [4, 5, 1, 2]
        },
        {
          "id": 4,
          "title": "Quiz 4",
          "question_ids": [1, 3, 5]
        },
        {
          "id": 5,
          "title": "Quiz 5",
          "question_ids": [5, 1, 2]
        }
      ]
    };
  },
});
