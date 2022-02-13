import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../../../GraphQL/Queries";
import "./JobsList.scss";

/**
 * List of jobs are displayed
 * Live search applied on the list based on the search query
 *
 * @param {string} searchQuery
 * @return {*}
 */
const Jobs = ({ searchQuery }) => {
  // message to display for published/not published
  const publishedMsg = "Job is published";
  const notPublishedMsg = "Job is not published";

  // fetching the jobs list from GraphQL query
  const { error, loading, data } = useQuery(LOAD_JOBS);

  // display error message if error received
  if (error) {
    return (
      <div class="alert alert-warning" role="alert">
        {error.message}
      </div>
    );
  }

  // show spinner if data not fetched yet
  if (loading) {
    return (
      <div className="spinner-border jobs-ldng" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  // filter the jobs based on the search query
  // filtering based on job title and/or company name
  const filterJobs = (data) => {
    return data["jobs"].filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery) ||
        job.company.name.toLowerCase().includes(searchQuery)
    );
  };

  // render the jobs
  const renderJobsData = (data) => {
    return filterJobs(data).map((job, index) => {
      return (
        <div className="column" key={job.id}>
          <div className="card">
            <div className="container">
              <h4>
                <b>{job.title ? job.title : "No title"}</b>
              </h4>
              <p>
                Published: {job.isPublished ? publishedMsg : notPublishedMsg}
              </p>
              <p>
                Company:{" "}
                {job.company.name ? job.company.name : "No Company Name"}
              </p>
              <p>
                User Email: {job.userEmail ? job.userEmail : "No User Email"}
              </p>
              <p>Description:</p>
              <p>
                {job.description
                  ? job.description.split(/[.]/)[0] + " ..."
                  : "No Description"}
              </p>
              <a href={job.applyUrl} target="_blank">
                <button type="button" className="btn btn-primary">
                  Apply here
                </button>
              </a>
              <Link
                to={{
                  pathname: `/detail/${job["id"]}`,
                  query: job["id"],
                }}
              >
                <button type="button" className="btn btn-primary btn-detail">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{data ? renderJobsData(data) : null}</div>;
};

export default Jobs;
