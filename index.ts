class Greeter {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    greet() {
        console.log(this.message);
    }
}

const greeter = new Greeter("Hello, TypeScript!");
greeter.greet();
