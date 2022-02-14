import React, { Fragment } from "react";

function JobInfo({ job, isFromList }) {
  // message to display for published/not published
  const publishedMsg = "Job is published";
  const notPublishedMsg = "Job is not published";

  return (
    <Fragment>
      <h4>
        <b>{job.title ? job.title : "No title"}</b>
      </h4>
      <p>
        <strong> Published: </strong>
        {job.isPublished ? publishedMsg : notPublishedMsg}
      </p>
      <p>
        <strong>Company: </strong>
        {job.company.name ? job.company.name : "No Company Name"}
      </p>
      <p>
        <strong>User Email: </strong>
        {job.userEmail ? job.userEmail : "No User Email"}
      </p>
      <p>
        <strong>Description:</strong>
      </p>
      {/* Render description text accordingly if component called from list or detail view*/}
      {isFromList ? (
        <p>
          {job.description
            ? job.description.split(/[.]/)[0] + " ..."
            : "No Description"}
        </p>
      ) : (
        <p>{job.description ? job.description : "No Description"}</p>
      )}

      <a href={job.applyUrl} target="_blank">
        <button type="button" className="btn btn-primary">
          Apply here
        </button>
      </a>
    </Fragment>
  );
}

export default JobInfo;
