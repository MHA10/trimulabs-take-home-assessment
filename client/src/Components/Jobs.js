import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../GraphQL/Queries";

function Jobs() {
  // fetching the data for jobs
  const { error, loading, data } = useQuery(LOAD_JOBS);

  // run it when data is changed
  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
}

export default Jobs;
