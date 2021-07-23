import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteList } from "./components/IncompleteList";
import { CompleteList } from "./components/CompleteList";

export const App = () => {
  // 入力したテキスト
  const [todoText, setTodoText] = useState("");
  // 未完了リスト
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了リスト
  const [completeTodos, setCompleteTodos] = useState([]);

  // inputへの入力を反映
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // TODO追加ボタン押下時の処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 未完了リスト削除ボタン押下時の処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 未完了リスト完了ボタン押下時の処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 完了リスト戻すボタン押下時の処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo５個までだよ〜！消化して〜！！
        </p>
      )}

      <IncompleteList
        incompleteTodos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteList completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
