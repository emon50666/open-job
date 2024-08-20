
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabSection = () => {
  const [jobs,setJobs] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)

    }
    getData()
  },[])




    return (
        <div className='mb-20 justify-center flex container mx-auto'>
          
  <Tabs className={' w-full '}>
    <div className='  flex justify-center '>
    <TabList>
      <Tab>Web Development</Tab>
      <Tab>Graphics Design</Tab>
      <Tab>Digital Marketing</Tab>

    </TabList>
    </div>

    <TabPanel>
    <div className='grid grid-cols-1 gap-8 xl:mt-16 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  {
    jobs?.filter(j => j.category === 'Web Development').map?.(job => <JobCard key={job._id} job={job}></JobCard>)
  }
</div>

    </TabPanel>

    <TabPanel>
    <div className='grid grid-cols-1 gap-8 xl:mt-16 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  {
    jobs?.filter(j => j.category === 'Graphics Design').map?.(job => <JobCard key={job._id} job={job}></JobCard>)
  }
</div>

    </TabPanel>

    <TabPanel>
    <div className='grid grid-cols-1 gap-8 xl:mt-16 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  {
    jobs?.filter(j => j.category === 'Digital Marketing').map?.(job => <JobCard key={job._id} job={job}></JobCard>)
  }
</div>

    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TabSection;

