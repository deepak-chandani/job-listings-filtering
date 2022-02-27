import Header from './components/Header'
import './App.scss';
import JobList from './components/JobList/JobList';
import Filters from './components/Filters';
import {useJobs} from './hooks/';

function App() {
  const {jobs, isLoading} = useJobs()

  return (
    <main>
      <Header />
      <Filters />
      {isLoading && <p>Loading jobs...</p>}
      {!isLoading && <JobList jobs={jobs} />}
    </main>
  );
}

export default App;