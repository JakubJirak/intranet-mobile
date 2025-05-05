import {Link} from "react-router-dom";
import spseLogo from '../assets/spse-modry.svg'

const Login = () => {
    return (
        <div className='flex flex-col items-center h-screen my-[20vh]'>
            <img src={spseLogo} alt="spselogo" className='h-18 m-5'/>
            <h1 className='font-semibold font text-3xl'>Intranet 4</h1>
            <h2 className='font-semibold text-primary-700 mb-5 text-2xl'>mobile</h2>
            <div className="bg-white rounded-lg flex flex-col px-4 pb-1 pt-3 w-[90%] max-w-[600px]">
                <label className='self-start' htmlFor="name">Uživatel</label>
                <input
                    className='bg-gray-100 w-[100%] mb-4 h-10 border-1 border-gray-300 rounded-[4px] focus:outline-none px-3'
                    type="text"
                    id='name' placeholder='Logovací jméno' autoComplete='on'/>
                <label htmlFor="pass">Heslo</label>
                <input
                    className='bg-gray-100 w-[100%] h-10 border-1 border-gray-300 rounded-[4px] mb-1 focus:outline-none px-3'
                    type="password"
                    id='pass' placeholder='Heslo' autoComplete='on'/>
                <Link
                    className='bg-primary-700 w-[100%] my-3 text-white rounded-[8px] py-2 px-4 text-center hover:bg-primary-800 cursor-pointer duration-200 transition'
                    to='/menu'>Přihlásit se</Link>
            </div>
        </div>
    )
}

export default Login;