// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

class Shirt {
    size: string;
    message: string;

    constructor(size: string = "large", message: string = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }

    display(): void {
        console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
}

function make_shirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
    return new Shirt(size, message);
}

// Making a large shirt with the default message
const largeShirtDefault = make_shirt();
largeShirtDefault.display();

// Making a medium shirt with the default message
const mediumShirtDefault = make_shirt("medium");
mediumShirtDefault.display();

// Making a shirt of any size with a different message
const customShirt = make_shirt("small", "Custom message here");
customShirt.display();