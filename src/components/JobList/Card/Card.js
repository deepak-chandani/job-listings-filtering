import React from "react";
import cn from "classnames";
import { useFilters } from "../../../hooks";
import "./Card.scss";
import classNames from "classnames";

function Card({job}) {
  const {filters, addFilter} = useFilters()

  const {company, featured:isFeatured, new: isNew, position } = job

  const isHighlighted = isNew && isFeatured

  const classes = classNames('job-card', {'border-highlighted': isHighlighted})
  return (
    <div className={classes}>
      <div className="company-logo">
        <img
          className="company-logo_img"
          src={job.logo}
          alt={`${job.company} logo`}
        />
      </div>
      <div className="job-info">
        <p className="t-company-name">{company}</p>
        {isNew && <p className="job-tag job-tag--new ">new!</p>}
        {isFeatured && <p className="job-tag job-tag--featured ">featured</p>}
        <p className="t-position position">{position}</p>
        <div className="other-info ">
          <p>{job.postedAt}</p> <div className="dot-spacer"></div>
          <p>{job.contract}</p> <div className="dot-spacer"></div>
          <p>{job.location}</p>
        </div>
      </div>
      <div className="line-divider"></div>
      <div className="role-level-languages ">
        {job.languages.map((lang) => {
          const isAlreadySelected = filters.includes(lang)
          const onClick = isAlreadySelected ? noop : () => addFilter(lang)
          return (
            <div className={cn('tech-skill', {selected: isAlreadySelected})} onClick={onClick} >{lang}</div>
          )
        })}
        {job.tools.map((tool) => {
          const isAlreadySelected = filters.includes(tool)
          const onClick = isAlreadySelected ? noop : () => addFilter(tool)
          return (
            <div className={cn('tech-skill', {selected: isAlreadySelected})} onClick={onClick} >{tool}</div>
          )
        })}
      </div>
    </div>
  );
}

export default Card;

function noop(){}