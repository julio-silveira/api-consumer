import { Fab, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import BasicModal from '../../components/BasicModal/BasicModal'
import { CostumersTable } from '../../components/CostumersTable'
import { CustomMainBox } from '../../components/CustomMainBox'
import { Header } from '../../components/Header'
import AppContext, { ContextType } from '../../context/AppContext'
import useAxios from '../../hooks/useAxios'
import AddIcon from '@mui/icons-material/Add'
import { buildGetAllRequest } from '../../helpers/requestHelper'

const Costumer: React.FC = () => {
  const { response, loading } = useAxios(buildGetAllRequest())
  const { handleStartCreatingCostumer, allCostumers, setAllCostumers } =
    useContext(AppContext) as ContextType

  useEffect(() => {
    if (response !== undefined) {
      setAllCostumers(response)
    }
  }, [response])

  return (
    <CustomMainBox>
      <>
        <Header />
        {allCostumers.length === 0 ? (
          <Typography variant="h5" pt="50vh">
            Não existem clientes cadastrados.
          </Typography>
        ) : (
          <CostumersTable data={allCostumers as []} loading={loading} />
        )}

        <BasicModal />
        <Fab
          onClick={handleStartCreatingCostumer}
          sx={{
            position: 'fixed',
            right: { xs: '45%', md: '1%' },
            bottom: { xs: '5%', md: '1%' }
          }}
          color="secondary"
        >
          <AddIcon />
        </Fab>
      </>
    </CustomMainBox>
  )
}

export default Costumer
