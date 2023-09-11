import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [flashCard, setFlashCard] = useState({
    question: 'What is React?',
    choices: ['A JavaScript framework', 'A JavaScript library'],
    answer: 'A JavaScript library.',
    explanation: `It's absolutely crucial that if you ever hear anyone have the
              audacity to call it a framework, you must correct them as
              pedantically as possible, preferably starting your response with
              the phrase "um, actually..."`,
  });

  return (
    <div>
      <header>
        <img
          src="./assets/react.svg
        "
        />
        <h1> React Study Buddy </h1>
      </header>

      {/*-------Edit the div below!------------*/}

      <div className="flash-card ">
        {/*-------Edit the div above!------------*/}

        <div className="flash-card-inner">
          <div className="flash-card-front">
            <p className="question">{flashCard.question}</p>
            <ol type="a">
              {flashCard.choices.map((choice) => (
                <li key={nanoid()}>{choice}</li>
              ))}
            </ol>
          </div>
          <div className="flash-card-back">
            <p className="answer">{flashCard.answer}</p>
            <p>{flashCard.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
