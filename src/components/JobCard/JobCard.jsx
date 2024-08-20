import { Link } from "react-router-dom";

const JobCard = ({job}) => {
  const {category,job_title,deadline,description,max_price,
    min_price,_id
    } = job || {}
    return (
        <>
            <Link to={`/job/${_id}`} className='w-full max-w-sm px-4 py-3 border-violet-500 border  bg-violet-50/30 rounded-md shadow-md hover:scale-[1.05] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
        Deadline: {new Date(deadline).toLocaleDateString()}
        </span>
        <span className='px-3 py-1 text-[8px] text-violet-700 font-semibold uppercase bg-violet-200 rounded-full '>
         {category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          {job_title}
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
          {description.slice(0,50 )+ '[...]'}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: $ {max_price} - ${min_price}
        </p>
      </div>
    </Link>
        </>
    );
};

export default JobCard;