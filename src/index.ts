export interface Todo {
  id: number;
  userId: number;
  completedd: boolean;
  title: string;
}

export function getTodosByCount(count: number) {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then<Todo[]>((responseText) => {
      return JSON.parse(responseText);
    })
    .then((data) => {
      return data.slice(0, count);
    })
    .catch((error) => console.log(error));
}

getTodosByCount(9).then((data) => {
  console.log(data);
});
