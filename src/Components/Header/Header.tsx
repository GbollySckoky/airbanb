
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-red-900 w-full z-999 fixed '>
        <div className='flex items-center justify-between z-999 text-white py-7 w-[90%] mx-auto'>
            <h1 className=''>ViVACExpress</h1>
            <div className='space-x-5'>
                <Link to='#'>Sign up</Link>
                <Link to='#'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Header