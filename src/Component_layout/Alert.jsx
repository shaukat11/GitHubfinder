import { useContext } from "react";
import AlertContext from "../Context/Alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex mb-4 items-start ml-6">
        <strong>{alert.msg}</strong>
      </p>
    )
  );
}

export default Alert;
