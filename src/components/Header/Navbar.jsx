import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/Authprovider"

const Navbar = () => {

    const {user, logOut,} = useContext(AuthContext)

    return (
      <div className='navbar bg-base-100 shadow-sm px-4 '>
        <div className='flex-1'>
          <div className='flex gap-2 items-center'>
            <img className='w-auto h-7' src='' alt='' />
            <Link to={'/'} className='font-black text-violet-500 text-2xl'>Open _<span className="text-green-500 font-black">Job  </span></Link>
          </div>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal capitalize font-base font-semibold px-1 bg-none'>
            <li className="text-violet-500 hover:text-green-500 ">
              <Link>Home</Link>
            </li>
            <li className="text-violet-500 hover:text-green-500 ">
              <Link>abou</Link>
            </li>
            {
                !user && 
                <li className="text-violet-500 border border-dashed border-violet-500 rounded-md hover:text-green-500 ">
              <Link to={'/Signup'}>SignUp</Link>
            </li>
            }
          </ul>
  
        {
            user &&
            <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn  btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full border border-dashed border-violet-500 '  >
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border border-dashed border-violet-500 rounded-box w-52'
            >
              <li>
                <Link to={'/add-job'} className='justify-between'>Add Job</Link>
              </li>
              <li>
                <Link to={'/my-job-post'}>My Posted Jobs</Link>
              </li>
              <li>
                <div>My Bids</div>
              </li>
              <li>
                <div>Bid Requests</div>
              </li>
              <li className='mt-2'>
               <Link to={'/login'}> <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button></Link>
              </li>
            </ul>
          </div>
        }
        </div>
      </div>
    )
  }
  
  export default Navbar