import { Question } from './Question';

export class Path {
    nextQuestion: Question;
    // Add more properties as needed

    constructor(nextQuestion: Question) {
        this.nextQuestion = nextQuestion;
    }
}