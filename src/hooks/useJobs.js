import { useEffect } from "react"
import { ACTION_TYPES, useJobsContext } from "../context/JobsContext"


export function useJobs(){
  const [{allJobs: jobs, filters}, dispatch] = useJobsContext()

  useEffect(() => {
    fetchJobs()
    .then(data => {
      dispatch({type: ACTION_TYPES.SET_JOBS, jobs: data})
      dispatch({type: ACTION_TYPES.ADD_FILTER, filter: 'React'})
    })
  }, [dispatch])

  const filteredJobs = jobs && jobs.filter(job => filters.every(f => job.languages.includes(f) || job.tools.includes(f)))

  return {
    jobs: filteredJobs,
    isLoading: jobs === null
  }
}

async function fetchJobs(){
  const data = await fetch('./data.json')
  const jobs = await data.json()
  return jobs
}