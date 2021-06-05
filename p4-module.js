const {data} = require('./p4-data.js');

function getQuestions(){
    let output = [];
    for (i = 0; i < data.length; ++i){
        output.push(data[i]['question']);
    }
    return output;
}

function getAnswers(){
    let output = [];
    for (i = 0; i < data.length; ++i){
        output.push(data[i]['answer']);
    }
    return output;
}

function getQuestionsAnswers(){
    let output = Object.assign(data);
    return output
}

function getQuestion(number = ""){
    let returnObj = {
        question: '',
        number: '',
        error: ''
    };
    if (Number.isInteger(number) == false){
        returnObj.error = 'Question number must be an integer';
    } else if (number < 1){
        returnObj.error = 'Question number must be >= 1'
    } else if (number > data.length){
        returnObj.error = `Question number must be <= the number of questions (${data.length})`;
    } else {
        returnObj.question = `${data[number - 1].question}`
        returnObj.number = number;
    }
        return returnObj;
}

function getAnswer(number = ""){
    let returnObj = {
        answer: '',
        number: '',
        error: ''
    };
    if (Number.isInteger(number) == false){
        returnObj.error = 'Answer number must be an integer';
    } else if (number < 1){
        returnObj.error = 'Answer number must be >= 1'
    } else if (number > data.length){
        returnObj.error = `Answer number must be <= the number of questions (${data.length})`;
    } else {
        returnObj.answer = `${data[number - 1].answer}`
        returnObj.number = number;
    }
        return returnObj;
}

function getQuestionAnswer(number = ""){
    let returnObj = {
        question: '',
        answer: '',
        number: '',
        error: ''
    };
    if (Number.isInteger(number) == false){
        returnObj.error = 'Question number must be an integer';
    } else if (number < 1){
        returnObj.error = 'Question number must be >= 1'
    } else if (number > data.length){
        returnObj.error = `Question number must be <= the number of questions (${data.length})`;
    } else {
        returnObj.question = `${data[number - 1].question}`
        returnObj.answer = `${data[number - 1].answer}`
        returnObj.number = number;
    }
        return returnObj;
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = {
      getQuestions,
      getAnswers,
      getQuestionsAnswers,
      getQuestion,
      getAnswer,
      getQuestionAnswer
  };