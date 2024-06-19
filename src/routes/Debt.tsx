import { useParams } from "react-router-dom";

export default function Debt() {
  const { id } = useParams();

  return <div>Debt: {id}</div>;
}
