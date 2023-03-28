import React from "react";

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className }) => {
  return <div className={`${className || ""}`}>Tabela</div>;
};

export default Table;
