// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love TypeScript"; }
        this.size = size;
        this.message = message;
    }
    Shirt.prototype.display = function () {
        console.log("Size: ".concat(this.size, ", Message: ").concat(this.message));
    };
    return Shirt;
}());
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return new Shirt(size, message);
}
// Making a large shirt with the default message
var largeShirtDefault = make_shirt();
largeShirtDefault.display();
// Making a medium shirt with the default message
var mediumShirtDefault = make_shirt("medium");
mediumShirtDefault.display();
// Making a shirt of any size with a different message
var customShirt = make_shirt("small", "Custom message here");
customShirt.display();
