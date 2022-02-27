import React from "react";
import Card from "./Card/Card";
import "./JobList.scss"

function JobList({jobs = []}){
  return (
    <section className="job-list">
      {
        jobs.map(item => <Card key={item.id} job={item} />)
      }
    </section>
  )
}

export default JobList;
