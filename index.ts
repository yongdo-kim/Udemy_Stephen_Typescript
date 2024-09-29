import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//interface는 런타임 동작보다는 컴파일 타임에 타입을 확인하는 용도로 자주 사용
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
