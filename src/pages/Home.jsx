import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import LineIcon from '../components/LineIcon'
function Home() {
  return (
    <div>
        <nav className='flex justify-between items-center'>
            <h1 className='text-2xl'>ThinkFeat</h1>
            <div className='hidden'>
                <ul className='text-lg'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Profiles</li>
                    <li>Courses</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <PrimaryButton text="Log In"></PrimaryButton>
                <SecondaryButton text="Log Out"></SecondaryButton>
            </div>
            <div>
                <LineIcon></LineIcon>
            </div>

        </nav>
    </div>
  )
}

export default Home