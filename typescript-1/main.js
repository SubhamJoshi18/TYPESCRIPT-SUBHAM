"use strict";
/*
Help us to catch error during development
uses type annotation to analyze our code
only acitve during development

typescript = javascript + type annotation
nodejs and browser does not understand ts but

ts will complie into js to be understandable

typescript
js with type annotations
typescript compiler
plain js
take plainjs to feed into browser or nodejs

a friend - typescript
writing code - javascript
a friend will tell the a man who is writing code that there is an error

*/
Object.defineProperty(exports, "__esModule", { value: true });
//fetching the data
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    var Id = todo.userId;
    var title = todo.title;
    var status = todo.completed;
    console.log("This is ".concat(Id, " with the ").concat(title, " of ").concat(status));
});
