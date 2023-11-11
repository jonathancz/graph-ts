export class Question {
    id: string;
    text: string;
    answer: any;  // 'any' can be replaced with a more specific type
    isAnswered: boolean;

    constructor(id: string, text: string, answer: any = null) {
        this.id = id;
        this.text = text;
        this.answer = answer;
        this.isAnswered = false;
    }

    setAnswer(answer: any): void {
        this.answer = answer;
        this.isAnswered = true;
    }

    // Additional methods or properties as needed...
}
