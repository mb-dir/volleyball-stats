import React from "react";
import "./style.css";
import useTable from "../../hooks/use-table";

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className }) => {
  const sortedTable = useTable();
  return (
    <div className={`tableView ${className || ""}`}>
      <h2>Tabela</h2>
      <table className="table">
        <thead>
          <tr>
            <th>LP.</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedTable.map((item, index) => (
            <tr className="table__row" key={index}>
              <td className="table__cell table__cell--small">{index + 1}</td>
              <td className="table__cell">{item.team}</td>
              <td className="table__cell">{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
