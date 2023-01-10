import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AppContext, { ContextType } from '../../context/AppContext'
import CostumerForm from '../CostumerForm/CostumerForm'
import { CostumerDetails } from '../CostumerDetails'

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
  const { modalStatus, handleModalClose, modalType } = useContext(
    AppContext
  ) as ContextType

  const isFormModal = () => modalType === 'create' || modalType === 'edit'
  const isInfoModal = () => modalType === 'view'

  return (
    <article>
      <Modal open={modalStatus} onClose={handleModalClose}>
        <Box
          sx={{
            ...style,
            width: { xs: '90%', md: isFormModal() ? '850px' : '400px' }
          }}
        >
          {isFormModal() ? <CostumerForm /> : null}
          {isInfoModal() ? <CostumerDetails /> : null}
        </Box>
      </Modal>
    </article>
  )
}
