import React from 'react'

const Home = () => {
    return (
        <div className='home'>
            <div className="hero flex flex-col justify-end">
                <div className='flex relative'>
                    <div className='w-[300px] h-[60px] bg-black'></div>
                    <div className='text-white'>
                        <h1>FASHION</h1>
                        <h1>AND</h1>
                        <h1>EXCLUSIVE</h1>
                        <h1>FAHSION</h1>
                    </div>
                    <div className='w-[900px] h-[60px] bg-black flex items-center justify-center absolute bottom-0 right-0 cursor-pointer'>
                        <h2 className='text-white'> SHOP NOW</h2>
                    </div>
                </div>

            </div>

            <section className="info flex h-[420px]">

                <div className="brand-name flex items-center justify-center w-1/2">
                    <h1 className="brand-title">RUNWAY</h1>
                </div>

                <div className="info-content flex flex-col justify-center w-1/2 px-16">
                    <h2 className="text-[40px] font-semibold tracking-wide mb-4">
                        PREMIUM AND EXCLUSIVE
                    </h2>
                    <p className="text-[18px] leading-[1.8] text-gray-700">
                        <span className="font-bold">RUNWAY</span> is an exclusive
                        urban fashion wear brand offering quality clothing with
                        comfort and style. Our exclusive collection ensures that
                        you never run out of fashion or charisma at any moment.
                        Discover our new arrivals today.
                    </p>
                </div>

            </section>
        </div>
    )
}

export default Home
