import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteList = (props) => {
  const { incompleteTodos, onClickDelete, onClickComplete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {/* 要素の中の何番目かを判断するためにmap関数の第２引数にindexを与えてあげる */}
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* onClickイベントの関数に引数を渡す場合は、
              そのまま渡してしまうとページアクセスと同時に配列の中身分だけ処理が読まれてしまうので、
              関数の前にアロー関数を置いてあげることでそれを防ぐことができる */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
