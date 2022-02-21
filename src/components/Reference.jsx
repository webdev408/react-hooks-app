import { useRef, useEffect } from 'react';

function Reference() {
  const titleRef = useRef()  

  useEffect(function() {
    setTimeout(() => {
      titleRef.current.innerHTML = '<p>This is an example of persistent change without rerendering. To achieve this we have used useRef hook in conjunction with useEffect hook. As you can see here, after 2 seconds of the initial rendering, the text content changes to this paragraph.</p>'
    },2000)
  },[])  
  
  return (
    <div className='user-detail'>
      <div className="title" ref={titleRef}>Original Title</div>      
    </div>
  )
}

export default Reference;