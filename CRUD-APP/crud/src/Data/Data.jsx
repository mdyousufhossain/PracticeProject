/**
 * fetching data from the server
 *
 */

import { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetching = async () => {
      const fetcing = await fetch("http://localhost:3030/");

      const data = await fetcing.json();

      setData(data);
      console.log(data);
    };

    dataFetching();

    console.log(data);
  }, []);

  return (
    <>
      <h1> hey there </h1>
    </>
  );
}
