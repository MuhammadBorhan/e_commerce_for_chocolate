import { useEffect, useState } from "react";

const usePackage = () => {
  const [packages, setPackages] = useState([]);
  const [relode, setRelode] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/package")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data?.data);
        setRelode(!relode);
      });
  }, [relode]);
  return [packages, setPackages];
};

export default usePackage;
