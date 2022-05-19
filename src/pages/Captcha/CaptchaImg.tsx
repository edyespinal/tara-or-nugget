import React, { useState } from 'react'

import { useStyles } from 'styles/captcha'

type Props = {
  route: string
}

const CaptchaImg = ({ route }: Props) => {
  const [isSelected, setIsSelected] = useState(false)

  const { classes } = useStyles()

  const handleClick = () => {
    setIsSelected(!isSelected)
  }

  return (
    <div className={classes.captchaImg} onClick={handleClick}>
      {isSelected && (
        <img
          className={classes.checkmark}
          src="/img/check.png"
          alt="Checkmark"
        />
      )}
      <img
        className={`${isSelected && classes.imgSelected}`}
        src={route}
        alt="Verification"
      />
    </div>
  )
}

export { CaptchaImg }
