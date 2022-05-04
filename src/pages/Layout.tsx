import React from 'react'

import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container size="lg">
      <Outlet />
    </Container>
  )
}

export { Layout }
