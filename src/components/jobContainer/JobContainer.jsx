// JobList.js


import JobCard from '../jobCard/JobCard';
import './jobContainer.css';


const JobContainer = () => {
    const cardArray = Array.from({ length: 5}, (_, index) => index);

  return (
    <div className="card-container" style={{
        position:"fixed",
        top:"3rem",
        left:"18rem",
        height:"auto",
    }}>
        
      <div className="cards-container" style={{  overflowY: 'scroll',height:"auto", maxHeight: '100vh', backgroundColor:'#F6F8FA',}}>
       <div className='border-job'>
        <div className='job-heading'>JOB(44)</div>
        <div className="cards-wrapper" style={{height:"auto", display: 'flex', flexWrap: 'wrap', gap: '23px' }}>
          {cardArray.map((index) => (
            <JobCard key={index} style={{ margin: '0 23px 23px 0' }} /> 
          ))}
        </div>
        </div>
      </div>
      <div>
          Showing 1-20 from 1250 data
      </div>
      
      </div>
  );
};

export default JobContainer;
