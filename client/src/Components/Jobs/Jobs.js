import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../../GraphQL/Queries";
import "./Jobs.scss";

const Jobs = () => {
  // message to display for published/not published
  const publishedMsg = "Job is published";
  const notPublishedMsg = "Job is not published";

  // fetching the data for jobs
  const { error, loading, data } = useQuery(LOAD_JOBS);

  // render the jobs
  const renderJobsData = (data) => {
    return data["jobs"].map((job, index) => {
      return (
        <div className="column" key={index}>
          <div className="card">
            <div className="container">
              <h4>
                <b>{job["title"]}</b>
              </h4>
              <p>
                Published: {job["isPublished"] ? publishedMsg : notPublishedMsg}
              </p>
              <p>Company: {job["company"]["name"]}</p>
              <p>User Email: {job["userEmail"]}</p>
              <p>Description:</p>
              <p>{job["description"].split(/[.]/)[0]} ....</p>
              <a href={job["applyUrl"]} target="_blank">
                <button type="button" class="btn btn-primary">
                  Apply here
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{data ? renderJobsData(data) : null}</div>;
};

export default Jobs;
