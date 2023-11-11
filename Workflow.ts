import { Question } from './Question';
import { Path } from './Path';
import { Answer } from './Answer';

export class Workflow {
    private questions: Map<string, Question>;
    private paths: Map<Question, Path[]>;

    constructor() {
        this.questions = new Map();
        this.paths = new Map();
    }

    addQuestion(question: Question): void {
        this.questions.set(question.id, question);
    }

    addPath(fromQuestionId: string, toQuestionId: string, condition?: (answer: Answer) => boolean): void {
        const fromQuestion = this.questions.get(fromQuestionId);
        const toQuestion = this.questions.get(toQuestionId);
    
        if (fromQuestion && toQuestion) {
            const path = new Path(toQuestion, condition);
            const existingPaths = this.paths.get(fromQuestion) || [];
            existingPaths.push(path);
            this.paths.set(fromQuestion, existingPaths);
        }
    }

    getQuestion(questionId : string): Question  | undefined{
        return this.questions.get(questionId);
    }

    canTraverse(fromQuestionId: string, toQuestionId: string): boolean {
        const fromQuestion = this.questions.get(fromQuestionId);
        const toQuestion = this.questions.get(toQuestionId);

        // console.log(`Question : ${fromQuestion?.id} , Answer: ${fromQuestion?.answer} , isAnswered: ${fromQuestion?.isAnswered}`);
        // console.log(toQuestion?.id);
    
        if (!fromQuestion || !toQuestion || !fromQuestion.isAnswered) {
            return false;
        }
    
        const paths = this.paths.get(fromQuestion);
        if (!paths) {
            return false;
        }
    
        const path = paths.find(p => p.nextQuestion === toQuestion);
        if (!path) {
            return false;
        }
    
        return path.isPathValid(fromQuestion.answer);
    }

    describe(): void {
        console.log("List of Questions:");
        this.questions.forEach((_, question) => {
            console.log(`- ${_.text}`);
        });

        console.log("\nGraph Visualization:");
        this.visualizeGraph();
    }

    private visualizeGraph(): void {
        this.paths.forEach((paths, question) => {
            let connections = paths.map(path => `--> ${path.nextQuestion.text}`).join(' ');
            console.log(`${question.text} ${connections}`);
        });
    }

    // Additional methods to manage and traverse the workflow
}
