import React from "react";
import { useFilters } from "../../hooks";
import "./Filters.scss";
import SelectedSkill from "./SelectedSkill";

function Filters() {
  const {filters, isFilterApplied, removeFilter, clearFilters} = useFilters()

  if(!isFilterApplied){
    return null
  }

  return (
    <div className="filter-wrapper">
      <div className="jobs-filter">
        <div className="selected-keywords-container">
          {
            filters.map((f) => <SelectedSkill keyword={f} onRemove={removeFilter} />)
          }
        </div>
        <button className="jobs-filter__clear" onClick={clearFilters}>Clear</button>
      </div>
    </div>
  );
}

export default Filters;
