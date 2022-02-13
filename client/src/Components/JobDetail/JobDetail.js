import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../../GraphQL/Queries";

const JobDetail = () => {
  // getting id from the url
  const id = window.location.pathname.split("/")[2];

  // message to display for published/not published
  const publishedMsg = "Job is published";
  const notPublishedMsg = "Job is not published";

  const { error, loading, data } = useQuery(LOAD_JOBS);

  // Get the specific required Job data
  const filterJobs = (data) => {
    return data["jobs"].filter((job) => job["id"].includes(id));
  };

  // render the job
  const renderJobsData = (data) => {
    return filterJobs(data).map((job, index) => {
      return (
        <div className="column" key={job["id"]}>
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
              <p>{job["description"]}</p>
              <a href={job["applyUrl"]} target="_blank">
                <button type="button" className="btn btn-primary">
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

export default JobDetail;
