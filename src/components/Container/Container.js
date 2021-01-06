import React from 'react'
import { Layout } from '../Container/Container.styled'

const Container = ({ children }) => {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  )
}

export default Container
