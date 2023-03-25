import React from 'react'
import CampFooter from './CampFooter'
import { BiChevronsDown } from "react-icons/bi";
import './Camplejeune.css';

const Camplejeune = () => {
    return (
        <div>
            <div className='top-header'></div>
            <div className='max-w-[600px] !mx-auto main-body px-3'>
                <div className='flex gap-5 justify-center items-center mt-10 mb-3 '>
                    <div className='top-logo' >
                        <img src="https://i.ibb.co/pzYRBLF/clc-logo.png" alt="" className='top-logo' />
                    </div>
                </div>
                <h2 className='text-[#A6192E] text-center lg:text-3xl text-xl font-bold'>Get the Compensation You Deserve for Camp Lejeune Water Contamination</h2>
                <img src="https://i.ibb.co/6w6KvK1/camplejeune.png" alt="" className=' pt-2 pb-3 mx-auto' />
                <h4 className='text-xl text-center font-bold px-3'>You may be entitled up to 300 Million compensation if you were exposed to contaminated water at Camp Lejeune. Find out if you qualify for a settlement today.</h4>
                <h2 className='sm:text-3xl text-center'>Find out if you qualify for a settlement today. Click the button below to speak with one of our attorneys and get started.</h2>
                <div className="floating-icon ">
                    <a href="#form">
                        <BiChevronsDown color="#00D100" size={55} className="mouse" />
                    </a>
                </div>
                <div className='banner-button text-center'>
                    <a href="https://www.r3hlvtrk.com/3J67C/883NLR8/" >
                        <button className='phone-button py-2'>Get Started Now</button>
                    </a>
                </div>
                <h4 className='text-xl font-bold text-center px-3'>Between the 1950s and the 1980s, thousands of military personnel and their families were exposed to toxic chemicals in the drinking water at Camp Lejeune. If you or a loved one was stationed at Camp Lejeune during this time and suffered from any of the health conditions associated with the contamination, you may be entitled to compensation.</h4>

                <p className='text-center font-semibold text-xl mt-10'>Our Camp Lejeune lawsuit offer provides the following benefits:</p>
                <div className='flex justify-center'>
                    <ul className='ul-article mx-auto'>
                        <li>Expert legal representation from experienced attorneys</li>
                        <li>Assistance with filing a claim for compensation</li>
                        <li>Access to settlement funds for eligible claimants</li>
                        <li>No upfront costs or fees - we only get paid if you receive a settlement"

                        </li>
                    </ul>
                </div>
                <p className='font-bold text-center'>Eligibility: You may be eligible for a settlement if you:</p>
                <div className='flex justify-center'>
                    <ul className='ul-article'>
                        <li>Were stationed at Camp Lejeune between the 1950s and 1980s</li>
                        <li>Were exposed to contaminated water</li>
                        <li>Suffered from one of the health conditions associated with the contamination</li>
                    </ul>
                </div>
               
                <p className='text-xl text-center'>At our law firm, we have been fighting for the rights of Camp Lejeune victims for years. Our team of experienced attorneys is dedicated to helping you get the compensation you deserve. We understand the complexities of this case and are committed to providing you with the support and guidance you need to pursue justice.</p>
                {/* <h4 className='text-xl font-bold px-3'>If you or your family member, lived or stayed for 30 days for in Camp Lejeune in 1953 to 1987 and suffering a health condition, you can be entitled to the compensation of Million Dollars based on Camp Lejeune Justice ACT 2022!</h4> */}

                {/* <h3 className='text-[#A6192E] font-semibold lg:text-4xl  text-2xl my-3'>Time is limited to file your claim!</h3>
                <h3 className='font-semibold lg:text-4xl text-2xl'>Apply For Compensation:</h3> */}
                {/* <img src="https://i.ibb.co/86DqV2T/hands-gesture-ph-blue.png" alt="" className='mx-auto my-8'/> */}
                {/* multi page start */}


                {/* <p className='text-xl my-4 px-3'> As of August 10th, 2022, the Camp Lejeune Justice Act, which was previously introduced as part of the PACT Act, has been passed by the U.S. Senate.  <span className='font-bold '>0$ No Obligation Expert Consultation - You have to Pay Nothing! We will provide 100% Privacy and Confidentiality about your case!</span></p>
                <h4 className='my-8 font-semibold text-xl px-3'>Get assistance from a Camp Lejeune Expert lawyer who will protect your rights and fight for what you are owed!</h4>
 */}

            </div>
            <CampFooter />
        </div>
    )
}

export default Camplejeune