import React from 'react'
import { CustomMainBox } from '../../components/CustomMainBox'
import { Header } from '../../components/Header'

const Dog: React.FC = () => {
  return (
    <CustomMainBox>
      <>
        <Header />
        Dogs
      </>
    </CustomMainBox>
  )
}

export default Dog
