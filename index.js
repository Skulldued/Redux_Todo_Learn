import store from "./store.js";
import { addTodoActionCreator, addUserTodoActionCreator, removeTodoActionCreator } from "./actionCreators.js";
console.log(store.getState());

store.dispatch(addTodoActionCreator("buy milk"));
console.log(store.getState().todosState);
store.dispatch(addTodoActionCreator("buy milks"));
console.log(store.getState().todosState);
store.dispatch(addUserTodoActionCreator('john Doe'));