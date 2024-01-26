import React from 'react'
import ContactUsForm from './Forms/ContactUsForm'

const Footer = () => {
    return (
        <section className=' bg-[#242424]'>
            <footer className='page-wrapper pt-10'>
                <div className='flex md:flex-row border-t-2 border-white flex-col items-center justify-between py-6 relative w-full nav-adjust'>
                    <div className="text-2xl md:mb-0 mb-6">
                       Chisom Okeoma
                    </div>
                    <div className="flex items-center space-x-10 md:mr-10 mr-0">
                        <a href="https://github.com/xomcodes">
                            <img src={'/images/icon-github.svg'} alt="github_icon" />
                        </a>
                      
                        
                        <a href="https://www.linkedin.com/in/chisom-okeoma-2839b6169/">
                            <img src={'/images/icon-linkedin.svg'} alt="linkedIn_icon" />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer
