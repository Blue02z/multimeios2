import React from 'react'

function PageIcon({icone, texto}) {
  return (
    <div className='flex justify-center items-center flex-col'>

        <div className='w-[120px] h-[120px] rounded-[16px] flex justify-center items-center bg-[#D2D2D2] hover:cursor-pointer hover:bg-[#B0AFAF] '>

                {icone}

        </div>

        <div>
            <h2 className='font-bold text-[20px]'>{texto}</h2>
        </div>

    </div>
  )
}

export default PageIcon