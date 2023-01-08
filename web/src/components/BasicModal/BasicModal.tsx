import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import AppContext, { ContextType } from '../../context/AppContext'
import CostumerForm from '../CostumerForm/CostumerForm'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: '850px' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function BasicModal() {
  const { modalStatus, handleModalClose } = useContext(
    AppContext
  ) as ContextType
  return (
    <div>
      <Modal open={modalStatus} onClose={handleModalClose}>
        <Box sx={style}>
          <CostumerForm />
        </Box>
      </Modal>
    </div>
  )
}
