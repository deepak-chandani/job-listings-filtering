import { ACTION_TYPES, useJobsContext } from "../context/JobsContext"


export function useFilters(){
  const [{filters}, dispatch] = useJobsContext()

  const addFilter = (skill) => {
    dispatch({type: ACTION_TYPES.ADD_FILTER, filter: skill})
  }

  const removeFilter = (skill) => {
    dispatch({type: ACTION_TYPES.REMOVE_FILTER, filter: skill})
  }

  const clearFilters = () => {
    dispatch({type: ACTION_TYPES.CLEAR_FILTERS })
  }

  return {
    isFilterApplied: filters.length>0,
    filters,
    addFilter,
    removeFilter,
    clearFilters
  }
}