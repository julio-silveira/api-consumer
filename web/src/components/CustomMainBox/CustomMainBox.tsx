import { Box } from '@mui/material'
import React, { useContext } from 'react'
import AppContext, { ContextType } from '../../context/AppContext'
import CustomAlert from '../CustomAlert/CustomAlert'

interface PropsInterface {
  children: React.ReactElement
  sx?: object
}

const CustomMainBox: React.FC<PropsInterface> = ({ children, sx }) => {
  const {
    alert: { open }
  } = useContext(AppContext) as ContextType
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        mt: 12,
        backgroundImage:
          'url("https://finestwp.co/demos/wp/shadepro/wp-content/uploads/2020/10/pattern-2.png")',
        ...sx
      }}
    >
      {children}
      {open ? <CustomAlert /> : null}
    </Box>
  )
}

export default CustomMainBox
