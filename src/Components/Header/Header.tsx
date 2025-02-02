
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-[#2E96E6] w-full opacity-25 fixed '>
        <div className='flex items-center justify-between z-999 text-white py-7 w-[90%] mx-auto'>
            <h1 className=''>ViVACExpress</h1>
            <div>
                <Link to='#'>Sign up</Link>
                <Link to='#'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Header