import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomplete(inputText);
};

const deleteIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncomplete = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    const addTarget = completebutton.parentNode;
    const item = addTarget.firstElementChild.innerText;

    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = item;

    const returnbutton = document.createElement("button");
    returnbutton.innerText = "戻す";
    returnbutton.addEventListener("click", () => {
      const addTarget = returnbutton.parentNode;
      const item = addTarget.firstElementChild.innerText;

      createIncomplete(item);

      const deleteTarget = returnbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
    });

    div.appendChild(li);
    div.appendChild(returnbutton);

    deleteIncomplete(completebutton.parentNode);

    document.getElementById("complete-list").appendChild(div);

    console.log(div);
  });

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    deleteIncomplete(deletebutton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
