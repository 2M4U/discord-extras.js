const { randomInterval } = new (require('./index'));

randomInterval(() => {
    console.log("Hello, I am a randomized interval that is determined between 1 hour and 2hours.");
}, 3.6e+6, 7.2e+6);