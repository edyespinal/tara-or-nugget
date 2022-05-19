import { createStyles } from '@mantine/core'

export const useStyles = createStyles(
  ({ breakpoints, colors, white, shadows, spacing, radius }) => ({
    captcha: {
      backgroundColor: white,
      boxShadow: shadows.xl,
      padding: '1rem',
      width: 'min(90vw, 600px)',
    },

    header: {
      backgroundColor: colors.blue,
      color: white,
      display: 'flex',
      justifyContent: 'space-between',
      padding: spacing.xl,

      [`@media (max-width: ${breakpoints.sm}px)`]: {
        flexDirection: 'column',
        lineHeight: 1.1,
        padding: spacing.xs,
      },

      p: {
        margin: 0,
      },
      h2: {
        margin: '0.5rem 0 0',
      },
    },

    img: {
      border: `2px solid ${white}`,
      height: '150px',
      width: '150px',

      [`@media (max-width: ${breakpoints.sm}px)`]: {
        marginTop: '1rem',
      },
    },

    imagesContainer: {
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      width: 'min(100%, 568px)',
      padding: '0.25rem 0 0.5rem',
    },
    captchaImg: {
      position: 'relative',

      img: {
        padding: '2px',
        transition: 'all ease-in-out 0.07s',
        height: 'auto',
        width: '189px',

        [`@media (max-width: ${breakpoints.sm}px)`]: {
          width: 'min(100%)',
        },
      },
    },
    checkmark: {
      display: 'block',
      position: 'absolute',
      height: '25px !important',
      width: '25px !important',
    },
    imgSelected: {
      padding: '0.5rem !important',
    },

    footer: {
      borderTop: '2px solid lightgray',
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '1rem',

      img: {
        cursor: 'pointer',
        height: '30px',
        marginRight: '1.5rem',
        opacity: '0.7',
      },

      button: {
        backgroundColor: colors.blue,
        border: 'none',
        borderRadius: radius.xs,
        color: white,
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 700,
        padding: '0.75rem 1.5rem',
        textTransform: 'uppercase',
      },
    },

    modalWrapper: {
      position: 'fixed',
      inset: 0,
    },
  })
)
