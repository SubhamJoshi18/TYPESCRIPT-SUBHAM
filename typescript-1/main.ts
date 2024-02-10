/*

 ----------------TYPESCRIPT COMPLETE COURSE ----------
 ----------------SHUBHAM RAJ JOSHI --------------------
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

//fetching the data
import axiso from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

//defining the structure of the object (interface)
//we can ignore the properties if we want to
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
axiso.get(url).then((response) => {
  const todo = response.data as Todo;
  const Id = todo.userId;
  const Title = todo.title;
  const status = todo.completed;
  const { id, title, completed } = todo;
  calll(id, title, completed);
});

const calll = (id: number, title: string, completed: boolean) => {
  console.log(id, title, completed);

  console.log(`This is ${id} with the ${title} of ${completed}`);
};
