import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../../../GraphQL/Queries";
import { useNavigate } from "react-router-dom";
import JobInfo from "../JobInfo/JobInfo";

/**
 * Job detail page
 *
 * @return {*}
 */
const JobDetail = () => {
  // will use it for navigating to the previous page
  const navigate = useNavigate();

  // getting id from the url
  const id = window.location.pathname.split("/")[2];

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

  // Get the required specific Job data
  const filterJobs = (data) => {
    return data["jobs"].filter((job) => job["id"].includes(id));
  };

  // render the job
  const renderJobsData = (data) => {
    return filterJobs(data).map((job, index) => {
      return (
        <div className="column" key={job.id}>
          <div className="card">
            <div className="container">
              <button
                type="button"
                className="btn btn-primary btn-detail-back"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              {/* Flag to tell from where the info component is called */}
              {/* Passing the isFromList flag to render description accordingly*/}
              <JobInfo job={job} isFromList={false} />
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{data ? renderJobsData(data) : null}</div>;
};

export default JobDetail;
