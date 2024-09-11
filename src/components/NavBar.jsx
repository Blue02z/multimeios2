import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>

        <div className='bg-[#1F7122] h-[80px] flex justify-center items-center gap-5'>

                <div>
                    <Link to="/"><img className='w-[80px] h-[80px]' src="https://scontent.ffor14-1.fna.fbcdn.net/v/t39.30808-6/300820179_508025134657039_226351287125344319_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YVN0rHOb0pMQ7kNvgGbwEDk&_nc_ht=scontent.ffor14-1.fna&oh=00_AYDQvFqaVDZIJ4xBJ7Gy9r5PpqykEJMLRxqfjySUIh4-0g&oe=66D66309" alt="" /></Link>
                </div>

                <h1 className='text-white font-bold text-[30px]'>Multimeios</h1>

        </div>

    </div>
  )
}

export default NavBar