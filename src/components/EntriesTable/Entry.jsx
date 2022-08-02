import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";

const Entry = ({ data, type, deleteEntry }) => {
  return (
    <tr className="Entry">
      <td className="Entry_cell">{data.date}</td>
      <td className="Entry_cell">{data.amount}</td>
      <td className="Entry_cell">{data.title}</td>
      <td className="Entry_cell">{data.category}</td>
      <td className="Entry_cell">
        <Button handleClick={() => deleteEntry(data.id, type)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default Entry;
