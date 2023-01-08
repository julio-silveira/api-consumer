import { IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useContext } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreIcon from '@mui/icons-material/More'
import AppContext, { ContextType } from '../../context/AppContext'

interface PropsInterface {
  _id: string
}

const CostumersButtons: React.FC<PropsInterface> = ({ _id }) => {
  const {
    handleStartEditingCostumer,
    handleDeleteCostumer,
    handleViewCostumerDetails
  } = useContext(AppContext) as ContextType
  return (
    <Stack justifyContent="center" direction="row" component="article">
      <IconButton onClick={() => handleViewCostumerDetails(_id)} size="small">
        <MoreIcon fontSize="small" color="secondary" />
      </IconButton>
      <IconButton onClick={() => handleStartEditingCostumer(_id)} size="small">
        <EditIcon fontSize="small" color="secondary" />
      </IconButton>
      <IconButton onClick={() => handleDeleteCostumer(_id)} size="small">
        <DeleteIcon fontSize="small" color="secondary" />
      </IconButton>
    </Stack>
  )
}

export default CostumersButtons
