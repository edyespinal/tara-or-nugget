import React from 'react'

import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: '#333438',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '2rem',
      }}
    >
      <Outlet />
    </Container>
  )
}

export { Layout }
