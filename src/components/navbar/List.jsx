import { React } from "react";

function List(props) {
  return (
    <li className=" hover:text-red-300" onClick={props.onClick}>
      <a href={props.link}>{props.holder}</a>
    </li>
  );
}
export default List;
