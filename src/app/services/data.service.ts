import {Injectable} from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {
  questions : Question[];
  constructor() {
    // this.questions = [   {     text: 'What is your name?',     answer: 'My name
    // is PPP',     hide: true   }, {     text: 'What is your fav color?',
    // answer: 'My fav color is blue',     hide: true   }, {     text: 'What is your
    // fav language?',     answer: 'My fav language is JS',     hide: true   } ]
  }

  //Get Questions from LocalStorage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = []
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  //Add Questions to LocalStorage
  addQuestion(question : Question) {
    this
      .questions
      .unshift(question);

    //Init local variable
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      //Push new question
      questions.unshift(question);
      //set new array to LocalStorage
      localStorage.setItem('questions', JSON.stringify(questions));
      //
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question

      questions.unshift(question);

      //re-set LocalStorage
      localStorage.setItem("questions", JSON.stringify(questions));
    }
  }

  //Remove Questions from LocalStorage
  removeQuestion(question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this
          .questions
          .splice(i, 1);
          localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
  }
}
