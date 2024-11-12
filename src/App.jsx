import { useState,useEffect } from 'react'
import './styles/style.scss'
import axios from 'axios'

function App() {
  const [products, setProduct] = useState([])

  useEffect(()=>{
    axios.get("https://api.escuelajs.co/api/v1/products")
    .then((response)=>{
      if(response.status === 200 ){
        setProduct(response.data)
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])
  return (
    <>
    <div>
    {
        products.map((product,key)=>{
        
          return(
            <div key={key} className='card-container'>
              <div className='card'>
                <img src={product.images} alt="" width={300}/>
                <p className='title'>{product.title}</p>
                <p className='description'>{product.description}</p>
                <button>Satın Al {product.price}₺</button>
              </div>
              
           </div>

          )

        })
       
      }
    </div>
      
    </>
  )
}

export default App
