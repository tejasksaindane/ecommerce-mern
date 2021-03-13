import React from 'react'
import { API } from '../../backend';


const ImageHelper = ({product}) => {
   const imageurl= product 
   ?`${API}/product/photo/${product._id}`
   :`https://cdn.pixabay.com/photo/2019/09/04/13/41/vacations-4451632_1280.jpg`
    return (
        <div className="rounded border border-success p-2">
                <img
                  src={imageurl}
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
              </div>
    )
}



export default ImageHelper;