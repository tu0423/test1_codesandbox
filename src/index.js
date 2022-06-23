import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div作成
  const div = document.createElement("div");
  div.className = "list-row";

  //li作成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button完了タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //divの子要素に各要素を設定
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
