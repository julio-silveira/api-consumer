import React, { useContext, useEffect, useState } from 'react'
import { Alert, Box, IconButton, LinearProgress, Snackbar } from '@mui/material'

import AppContext, { ContextType } from '../../context/AppContext'
import CloseIcon from '@mui/icons-material/Close'

const AUTO_CLOSE_TIME = 5000
const TIMER_UPDATES = 20
const PROGRESS_INTERVAL = AUTO_CLOSE_TIME / TIMER_UPDATES

const CustomAlert = () => {
  const { alert, handleCloseAlert } = useContext(AppContext) as ContextType

  const [progress, setProgress] = useState(95)

  const { message, type, open } = alert

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => oldProgress - 5)
    }, PROGRESS_INTERVAL)
    const selfClose = setTimeout(() => handleCloseAlert(), AUTO_CLOSE_TIME)

    return () => {
      clearInterval(timer)
      clearTimeout(selfClose)
    }
  }, [handleCloseAlert])

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      open={open}
      onClose={handleCloseAlert}
    >
      <Alert
        severity={type}
        action={
          <IconButton type="button" onClick={handleCloseAlert}>
            <CloseIcon color={type} />
          </IconButton>
        }
      >
        {message}
        <Box sx={{ width: '100%' }}>
          <LinearProgress color={type} variant="determinate" value={progress} />
        </Box>
      </Alert>
    </Snackbar>
  )
}

export default CustomAlert
