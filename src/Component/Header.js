import React, { FC } from 'react'

const Header= () => {
  return (
    <div className='bg-1 d-flex flex-row justify-content-between align-items-center px-5'>


{/* end toolbar part start */}
    <div className='d-flex flex-row justify-content-end align-items-center text-white' >
       
      PIZZAZZZ

</div>
{/* end toolbar part end */}


    {/* navigation part start */}
    <div className='d-flex flex-row justify-content-start align-items-center py-3'>
        <div className=' mt-3 ms-1 me-5' style={{width:'44px', height:'54px'}} >
         
        </div>


        <div className='d-none  d-md-flex flex-row justify-content-start align-items-center text-nav'>
            <span className='me-5 text-white ' >
                Home
            </span>
            <span className='me-5 text-white' >
               Menu
            </span>
            <span className='me-5 text-white' >
                About Us
            </span>
            <span className='me-5 text-white' >
                Blogs
            </span>
        </div>
    </div>

    {/* navigation part end */}



</div>
  )
}

export default Header