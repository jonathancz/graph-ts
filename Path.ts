import { Question } from './Question';
export type Answer = string | number | boolean;

export class Path {
    nextQuestion: Question;
    condition?: (answer: Answer) => boolean;

    constructor(nextQuestion: Question, condition?: (answer: Answer) => boolean) {
        this.nextQuestion = nextQuestion;
        this.condition = condition;
    }

    isPathValid(previousAnswer: Answer): boolean {
        if (!this.condition) return true;
        return this.condition(previousAnswer);
    }
}
