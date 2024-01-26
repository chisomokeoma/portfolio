import React from 'react'

const Skillset = () => {
    return (
        <div className='overflow-hidden relative'>
            <section className='page-wrapper pb-16'>
        
          <h1 className=' md:text-[80px] text-[32px] leading-none'>Skills</h1>
                <div className='grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 sm:text-left text-center space-y-5 border-t-2 sm:py-20 py-16 border-white'>
                    <div classname='flex items-center'>
                        <h1 className='md:text-[36px] text-[26px]'>HTML</h1>
                       <figure  className='h-[60px] w-[60px]'>

                        <img src='/images/html-img.png' className='w-full h-full  max-w-[390px]:hidden'  alt='html image'/>
                       </figure>

                    </div>
                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>CSS</h1>
                        <img src='/images/css-img.png' className='w-[6opx] h-[60px]' alt='css img'/>
                    </div>

                    <div>
                    <h1 className='md:text-[36px] text-[26px]'>Tailwind</h1>
                        <img src='/images/tailwind-img.jpg' className='w-[6opx] h-[60px]' alt='tailwind image'/>   
                    </div>
                    

                    <div>
                    <h1 className='md:text-[36px] text-[26px]'>Bootstrap</h1>
                        <img src='/images/bootstrap-img.png' className='w-[6opx] h-[60px] ' alt='bootstrap image' />   
                    </div>


                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>Javascript</h1>
                        <img src='/images/js-img.png' className='w-[6opx] h-[60px]' alt='javascript image'/>
                    </div>
                    <div className=''>
                        <h1 className='md:text-[36px] text-[26px]'>Next.js</h1>
                    <figure  className='h-[70px] w-[70px]'>
                        <img src='/images/next2.jpg' className='w-full h-full'/>
                        </figure>
                    </div>
                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>React</h1>
                        <img src='/images/react-img.png' className='w-[6opx] h-[60px]'/>
                    </div>
                    <div>
                        
                        <h1 className='md:text-[36px] text-[26px]'>Github</h1>
                        <figure  className='h-[70px] w-[70px]'>
                        <img src='/images/git-img.png' className='w-full h-full'/>  
                        </figure>                
                          </div>

                          <div>
                        <h1 className='md:text-[36px] text-[26px]'>Mantine</h1>
                        <img src='/images/mantine.png' className='w-[6opx] h-[60px]'/>                  
                          </div>

                          <div>
                        <h1 className='md:text-[36px] text-[26px]'>Jest</h1>
                        <img src='/images/jest-img.png' className='w-[6opx] h-[60px]'/>                  
                          </div>
                </div>
                

            </section>
            <img className='absolute bottom-16 -right-64' src="/images/pattern-rings.svg" alt='decoration_item'/>
        </div>
    )
}

export default Skillset