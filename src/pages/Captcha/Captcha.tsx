import React, { Fragment, useState } from 'react'

import { Divider, Modal, Stack, Text, Title } from '@mantine/core'
import { useStyles } from 'styles/captcha'
import { imagesRoutes } from 'utils'

import { CaptchaImg } from './CaptchaImg'

type Selected = {
  src: string
  tara: boolean
}

const imag: Selected[] = []

while (imag.length < 9) {
  const i = Math.floor(Math.random() * 9)
  const it = imagesRoutes[i]

  if (!imag.some((item) => item.src === it.src)) {
    imag.push(it)
  }
}

const Captcha = () => {
  const [selected, setSelected] = useState<Selected[]>([])
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(false)

  const { classes } = useStyles()

  const handleSelected = ({ src, tara }: Selected) => {
    let updated: Selected[] = []

    if (selected.some((item: Selected) => item.src === src)) {
      updated = selected.filter((item) => item.src !== src)

      setSelected(updated)

      return
    }

    updated = [...selected, { src, tara }]
    setSelected(updated)
  }

  const handleCloseModal = () => {
    setGameOver(false)
    setWinner(false)
  }

  const handleVerify = () => {
    setGameOver(true)

    if (
      selected.length === 5 &&
      !selected.some((item) => item.tara === false)
    ) {
      setWinner(true)
    }
  }

  return (
    <Fragment>
      {gameOver && (
        <Modal opened={gameOver} onClose={handleCloseModal} centered>
          <Stack>
            <Title order={1} align="center">
              {winner ? '🥳 Ouiii!! 🎉' : '🙁 Oh no 💔'}
            </Title>
            <Divider />
            <Text size="lg" align="center">
              {winner ? 'You won!' : 'You lost...'}
            </Text>
            <Text size="sm" align="center" color="dimmed">
              {winner
                ? '(You really can tell the difference? 🤔)'
                : '(She does look like a chicken nugget right?! 🍗)'}
            </Text>
          </Stack>
        </Modal>
      )}

      <div className={classes.captcha}>
        {/* Header */}
        <div className={classes.header}>
          <div className="text">
            <p>Select all images with</p>
            <h2>Tara</h2>
            <p>(and not chicken nuggets)</p>
          </div>
          <div className={classes.img}>
            <img src="/img/Tara.jpg" alt="Tara" height={146} width={146} />
          </div>
        </div>
        {/* Body */}
        <div className={classes.imagesContainer}>
          {imag.map((item) => (
            <div key={item.src} onClick={() => handleSelected(item)}>
              <CaptchaImg route={item.src} />
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className={classes.footer}>
          <div>
            <img src="/img/reload.png" alt="Reload" />
            <img src="/img/headphone.png" alt="Headphone" />
            <img src="/img/exclamation.png" alt="Information" />
          </div>
          <button onClick={handleVerify}>Verify</button>
        </div>
      </div>
    </Fragment>
  )
}

export { Captcha }
