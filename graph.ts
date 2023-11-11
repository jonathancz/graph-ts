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

    addPath(fromQuestion: Question, toQuestion: Question, condition?: () => boolean): void {
        const path = new Path(toQuestion, condition);
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
            console.log(`- ${question.id} : ${question.text}`);
        });

        console.log("\nGraph Visualization:");
        this.visualizeGraph();
    }


    private visualizeGraph(): void {
        console.log("ASCII Graph Visualization:");

        // Function to print a node and its immediate connections
        const printConnections = (question: Question) => {
            let connections = this.adjacencyList.get(question);
            let connectedNodes = connections?.map(path => path.nextQuestion.id).join(', ');
            console.log(`${question.id.padEnd(4)} -> ${connectedNodes}`);
        };

        // Iterate over each question in the adjacency list
        this.adjacencyList.forEach((_, question) => {
            printConnections(question);
        });
    }
}