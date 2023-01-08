import { IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreIcon from '@mui/icons-material/More'

interface PropsInterface {
  _id: string
}

const CostumersButtons: React.FC<PropsInterface> = ({ _id }) => {
  return (
    <Stack justifyContent="center" direction="row" component="article">
      <IconButton size="small">
        <MoreIcon fontSize="small" color="secondary" />
      </IconButton>
      <IconButton size="small">
        <EditIcon fontSize="small" color="secondary" />
      </IconButton>
      <IconButton size="small">
        <DeleteIcon fontSize="small" color="secondary" />
      </IconButton>
    </Stack>
  )
}

export default CostumersButtons
