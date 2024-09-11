import React from 'react'

function Titulo({imagem, titulo}) {
  return (
    <div className='flex gap-3 w-full justify-center items-center mt-5'>

        <div>
            {imagem}
        </div>

        <h1 className='text-[40px] font-bold'>{titulo}</h1>

    </div>
  )
}

export default Titulo