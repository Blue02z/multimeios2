import React from 'react'

export default function Input({larg, nome}) {
  return (
    <div>
    <span><p className='font-bold text-[16px]'>{nome}</p></span>
    <div className={`w-[${larg}] bg-[#D1D1D1] rounded-[6px] h-[45px]`}>
    <input className={`w-full bg-transparent  h-[45px]`}  type="text" />
    </div>
    

</div>
  )
}
