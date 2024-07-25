import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useRef } from 'react'

function Back() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll=new LocomotiveScroll({
      el:scrollRef.current,
      smooth:true
    })
  
    return () => {
      scroll.destroy();
    }
  }, [])
  
  return (
    // Main Video Section Starts
    <div id='main' data-scroll-section ref={scrollRef}  className='scroll-container relative w-full h-full bg-blue-400'>
            <video data-scroll data-scroll-speed="-5"  className='w-full h-screen object-cover' autoPlay loop muted playsInline preload='auto' src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2"></video>
    </div>
    // Main Video Section Ends
  )
}

export default Back