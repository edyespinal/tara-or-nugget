import React from 'react'

import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container
      size="lg"
      style={{ height: '100vh', display: 'grid', placeItems: 'center' }}
    >
      <Outlet />
    </Container>
  )
}

export { Layout }
