import React from 'react'

const ClientDetails = ({clientName,clientAddress}) => {
  return (
   <>
    <section className='mt-10'>
    <h2 className='text-xl uppercase font-bold'>{clientName}</h2>
    <p>{clientAddress}</p>
    </section>
   </>
  )
}

export default ClientDetails