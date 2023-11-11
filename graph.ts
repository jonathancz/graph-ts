import { Question } from './Question';
import { Path } from './Path';

export class Graph {
    private adjacencyList: Map<Question, Path[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addQuestion(question: Question): void {
        if (!this.adjacencyList.has(question)) {
            this.adjacencyList.set(question, []);
        }
    }

    addPath(fromQuestion: Question, toQuestion: Question): void {
        const path = new Path(toQuestion);
        if (this.adjacencyList.has(fromQuestion)) {
            this.adjacencyList.get(fromQuestion)?.push(path);
        }
    }

    getNextQuestions(question: Question): Question[] {
        return this.adjacencyList.get(question)?.map(path => path.nextQuestion) || [];
    }

    describe(): void {
        console.log("List of Questions:");
        this.adjacencyList.forEach((_, question) => {
            console.log(`- ${question.text}`);
        });

        console.log("\nGraph Visualization:");
        this.visualizeGraph();
    }


    private visualizeGraph(): void {
        this.adjacencyList.forEach((paths, question) => {
            let connections = paths.map(path => `--> ${path.nextQuestion.text}`).join(' ');
            console.log(`${question.text} ${connections}`);
        });
    }
}