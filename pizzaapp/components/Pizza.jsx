'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import PizzaDetails from './PizzaDetails';
import {IoCloseOutline} from 'react-icons/io5'

Modal.setAppElement('body');

const modalStyles={
  overlay:{
    backgroundColor:'rgba(0,0,0,0.5)'
  }
}

const  Pizza =({pizza})=> {


  const[modal ,setModal]=useState(false);

const openModal=()=>{
  setModal(true)
}

const closeModal=()=>{
  setModal(false)
}

  return (
    <div className='group p-2  px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Image onClick={openModal} width={270} height={270} src={pizza.image} alt="" priority={1}/>

      <div>

      <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
{pizza.name}
       </div>
     </div>
     <div className="text-sm font-medium min-h-[60px] mb-6 ">

      {pizza.description}
     </div>

     <div className="mb-6 flex items-center justify-between">
      <div className='hidden lg:flex text-xl font-semibold'>
        starts at {pizza.priceSm}
      </div>
      <button onClick={openModal} className='hidden lg:flex bg-gradient-to-r from-yellow-600 to-red-600 text-white rounded-lg px-4  btn-xs font-semibold'>Select</button>
     
     <button onClick={openModal} className="btn btn-sm bg-gradient-to-r from-yellow-600 to-red-600 text-white text-sm lg:hidden px-3">
      starts at {pizza.priceSm}
      </button>

     </div>
{modal && (
<Modal 

isOpen={modal} 
style={modalStyles} 
onRequestClose={closeModal}
contentLabel='pizza'
className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none">
  <div onClick={closeModal} className="absolute z-30 right-2 top-2 ">
<IoCloseOutline className='text-4xl '/>
  </div>
  <PizzaDetails pizza={pizza} modal={modal} setModal={setModal}/>
</Modal>
)}
    
    </div>
   
  )
}

export default Pizza;