import React from 'react'
import Box from './Box'

export default function Portfolio() {
  return (
    <div className='Portfolio'>
        <Box imgSrc="https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg" />
        <Box imgSrc={`https://media.istockphoto.com/photos/crash-test-dummy-picture-id1047814320?k=20&m=1047814320&s=612x612&w=0&h=0AKSACDOeqymqNeqXGUPd-SpvxNl9S22fjcx09YUOfQ=`} />
    </div>
  )
}
