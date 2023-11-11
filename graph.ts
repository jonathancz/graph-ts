type AdjacencyList = {
    [key: string]: string[];
};

type Question = {
    id: string;
    text: string;
    // You can add more properties if needed
};

class Graph {
    private adjacencyList: AdjacencyList;
    private questions: { [id: string]: Question };

    constructor() {
        this.adjacencyList = {};
        this.questions = {};
    }

    addQuestion(question: Question): void {
        if (!this.questions[question.id]) {
            this.questions[question.id] = question;
            this.adjacencyList[question.id] = [];
        }
    }

    addEdge(questionId1: string, questionId2: string): void {
        if (this.adjacencyList[questionId1]) {
            this.adjacencyList[questionId1].push(questionId2);
        }
    }

    getQuestion(id: string): Question | undefined {
        return this.questions[id];
    }

    getNextQuestions(id: string): Question[] {
        return this.adjacencyList[id]?.map(qId => this.questions[qId]) || [];
    }
}

const graph = new Graph();

graph.addQuestion({ id: "Q1", text: "What is your favorite color?" });
graph.addQuestion({ id: "Q2", text: "What is your quest?" });
graph.addQuestion({ id: "Q3", text: "What is the air-speed velocity of an unladen swallow?" });

graph.addEdge("Q1", "Q2");
graph.addEdge("Q1", "Q3");

console.log(graph.getQuestion("Q1"));
console.log(graph.getNextQuestions("Q1"));