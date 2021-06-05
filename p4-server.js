 const fs = require("fs");
const { data } = require("./p4-data.js");
 const fastify = require("fastify")();
 const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer, 
 } = require("./p4-module.js");
 //const {data} = require("./p4-data.js");

fastify.get("/cit/question", (request, reply) => {
    const QsResult = getQuestions();
    const result = {
        "error": "",
        "statusCode": 200,
        "questions": QsResult
    }
    reply
        .code(200)
        .header("content-Type", "application/json; charset=utf-8")
        .send(result);
});

fastify.get("/cit/answer", (request, reply) => {
    const AsResult = getAnswers();
    const result = {
        "error": "",
        "statusCode": 200,
        "questions": AsResult
    }
    reply
        .code(200)
        .header("content-Type", "application/json; charset=utf-8")
        .send(result);
});

fastify.get("/cit/questionanswer", (request, reply) => {
    const QAsResult = getQuestionsAnswers();
    const result = {
        "error": "",
        "statusCode": 200,
        "questions_answers": QAsResult
    }
    reply
        .code(200)
        .header("content-Type", "application/json; charset=utf-8")
        .send(result);
});

fastify.get("/cit/question/:number", (request, reply) => {
    let num = request.params.number;
    const QResult = getQuestion(parseInt(num));
    QResult.statusCode = 200;
    reply
        .code(200)
        .header("content-Type", "application/json; charset=utf-8")
        .send(QResult);
});

fastify.get("/cit/answer/:number", (request, reply) => {
    let num = request.params.number;
    const AResult = getAnswer(parseInt(num));
    AResult.statusCode = 200;
    reply
        .code(200)
        .header("content-Type", "application/json; charset=utf-8")
        .send(AResult);
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let num = request.params.number;
    const QAResult = getQuestionAnswer(parseInt(num));
    QAResult.statusCode = 200;
    reply
        .code(200)
        .header("content-Type", "application/json; charset=utf-8")
        .send(QAResult);
});

fastify.get("*", (request, reply) => {
    const result = {
        "error": "Route not found",
        "statusCode": 404,
    }
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(result);
  });
    
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});