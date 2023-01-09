import React, { useContext, useEffect } from 'react'
import { Alert, Fade, IconButton } from '@mui/material'

import AppContext, { ContextType } from '../../context/AppContext'
import CloseIcon from '@mui/icons-material/Close'

const AUTO_CLOSE_TIME = 5000

const CustomAlert = () => {
  const { alert, handleCloseAlert } = useContext(AppContext) as ContextType

  const { message, type, open } = alert
  useEffect(() => {
    const selfClose = setTimeout(() => handleCloseAlert(), AUTO_CLOSE_TIME)
    return () => clearTimeout(selfClose)
  }, [handleCloseAlert])

  return (
    <Fade in={open} unmountOnExit>
      <Alert
        severity={type}
        sx={{
          position: 'fixed',
          bottom: { xs: '10%', sm: '1%' },
          right: '1%',
          display: 'flex',
          alignItems: 'center'
        }}
        action={
          <IconButton type="button" onClick={handleCloseAlert}>
            <CloseIcon color={type} />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Fade>
  )
}

export default CustomAlert
