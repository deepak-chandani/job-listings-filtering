import React from "react";

const ACTION_TYPES = {
  SET_JOBS: 'SET_JOBS',
  ADD_FILTER: "ADD_FILTER",
  REMOVE_FILTER: "REMOVE_FILTER",
  CLEAR_FILTERS: "CLEAR_FILTERS"
}

const JobsContext = React.createContext();

function reducer(state, action){
  switch(action.type){
    case ACTION_TYPES.SET_JOBS: {
      return {
        ...state,
        allJobs: action.jobs
      }
    }
    case ACTION_TYPES.ADD_FILTER: {
      const isExisting = state.filters.includes(action.filter)
      if(isExisting){
        return state
      }

      return {
        ...state,
        filters: state.filters.concat([action.filter])
      }
    }
    case ACTION_TYPES.REMOVE_FILTER: {
      return {
        ...state,
        filters: state.filters.filter(item => item !== action.filter)
      }
    }
    case ACTION_TYPES.CLEAR_FILTERS: {
      return {
        ...state,
        filters: []
      }
    }
    default:
      return state
  }
}

const initialState = {
  allJobs: null,
  filters: [],
  filteredJobs: null,
}

function JobsProvider({children, ...rest}){
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const value = [state, dispatch]

  return (
    <JobsContext.Provider value={value}>
      {children}
    </JobsContext.Provider>
  )
}

function useJobsContext(){
  const context = React.useContext(JobsContext);

  if (context === undefined) {
      throw new Error('useJobsContext must be used within a JobsProvider')
  }

  return context;
}

function useJobsDispatch(){
  const context = React.useContext(JobsContext);
  if (context === undefined) {
      throw new Error('useJobsDispatch must be used within a JobsProvider')
  }
  return context[1];
}

export {
  JobsProvider,
  useJobsContext,
  useJobsDispatch,
  ACTION_TYPES
}