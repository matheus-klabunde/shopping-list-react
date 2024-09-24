import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'

function Home() {

  // useState

  const [products, setProducts] = useState([])

  // useRef

  const inputRef = useRef()

  // functions

  function addProduct() {
    setProducts([{ id: v4(), name: inputRef.current?.value }, ...products])
    inputRef.current.value = ''
  }

  function deleteProduct(id) {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <Container>
      <h1>Shopping List</h1>
      <input placeholder="add your products here" ref={inputRef} />
      <AddButton onClick={addProduct}>Add</AddButton>

      {
        products.map(product => (
          <Product key={product.id}>
            <p>{product.name}</p>
            <TrashButton onClick={() => deleteProduct(product.id)}>🗑️</TrashButton>
          </Product>

        ))
      }

    </Container>
  )
}

export default Home
