import React from 'react'

import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: '#333438',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Outlet />
    </Container>
  )
}

export { Layout }
