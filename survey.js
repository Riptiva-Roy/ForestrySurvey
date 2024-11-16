import React, { useState } from 'react';

const ForestrySurvey = () => {
  const [responses, setResponses] = useState({});
  const [otherInputs, setOtherInputs] = useState({});

  const roleQuestion = {
    id: 'role',
    question: "Are you a forester or a technician?",
    answers: [
      { text: "Forester", value: 'forester' },
      { text: "Technician", value: 'technician' }
    ]
  };

  // Include all your question arrays here: commonQuestions, foresterQuestions, technicianQuestions, personalityQuestions

  const getQuestions = () => {
    if (!responses.role) {
      return [roleQuestion];
    }
    const roleSpecificQuestions = responses.role === 'forester' ? foresterQuestions : technicianQuestions;
    return [...commonQuestions, ...personalityQuestions, ...roleSpecificQuestions];
  };

  const handleResponseChange = (questionId, value) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const handleOtherInput = (questionId, value) => {
    setOtherInputs(prev => ({ ...prev, [questionId]: value }));
  };

  const renderQuestion = (question) => {
    if (question.type === 'text') {
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor={question.id}>{question.question}</label>
            <p className="text-sm text-gray-600">{question.description}</p>
          </div>
          <textarea
            id={question.id}
            value={responses[question.id] || ''}
            onChange={(e) => handleResponseChange(question.id, e.target.value)}
            className="min-h-[100px] w-full"
          />
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <label>{question.question}</label>
        <div>
          {question.answers.map((answer) => (
            <div key={answer.value} className="flex items-center space-x-2">
              <input
                type="radio"
                id={`${question.id}-${answer.value}`}
                name={question.id}
                value={answer.value}
                checked={responses[question.id] === answer.value}
                onChange={() => handleResponseChange(question.id, answer.value)}
              />
              <label htmlFor={`${question.id}-${answer.value}`}>{answer.text}</label>
              {question.hasOtherOption && responses[question.id] === answer.value && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherInputs[question.id] || ''}
                  onChange={(e) => handleOtherInput(question.id, e.target.value)}
                  className="ml-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form className="space-y-8">
        {getQuestions().map((question) => (
          <div key={question.id} className="space-y-6">
            {renderQuestion(question)}
          </div>
        ))}
      </form>
    </div>
  );
};

export default ForestrySurvey;