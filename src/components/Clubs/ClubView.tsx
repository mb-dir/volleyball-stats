import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

interface ClubViewProps {
  className?: string;
}

const ClubView: React.FC<ClubViewProps> = ({ className }) => {
  const { id } = useParams();
  return <div className={`${className || ""}`}>Klub View {id}</div>;
};

export default ClubView;
