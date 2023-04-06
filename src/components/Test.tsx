import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function Test() {
  const [images, setImages] = useState<unknown[]>([]);

  useEffect(() => {
    Cookies.remove('incap_ses_727_242093');
    fetch("/public/data/lotdetails/solr/lotImages/35808013/USA")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImages(data.data.imagesList.HIGH_RESOLUTION_IMAGE)
      });
  }, []);

  return (

    <div> 
            {images.map(image => <img src={(image as any).url} key={(image as any).sequenceNumber} alt={(image as any).sequenceNumber} />)} 
        </div> 
       )
}

export default Test;


