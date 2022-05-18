import {useState, useLayoutEffect} from 'react';


function useComponentWidth(component) {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
      function updateWidth() {
        setWidth(component.innerWidth);
      }
      component.addEventListener('resize', updateWidth);
      updateWidth();
      return () => component.removeEventListener('resize', updateWidth);
    }, []);
    return width;
  }

  export default useComponentWidth;