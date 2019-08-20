export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.db.loadData({
    quizzes: [
      {
        "title": "Quiz 1",
        "question_ids": [1, 2, 3]
      },
      {
        "title": "Quiz 2",
        "question_ids": [3, 4]
      },
      {
        "title": "Quiz 3",
        "question_ids": [4, 5, 1, 2]
      },
      {
        "title": "Quiz 4",
        "question_ids": [1, 3, 5]
      },
      {
        "title": "Quiz 5",
        "question_ids": [5, 1, 2]
      }
    ]
  });

  server.db.loadData({
    questions: [
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
  });
}
