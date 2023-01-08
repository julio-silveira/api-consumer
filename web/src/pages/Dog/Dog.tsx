import React from 'react'
import { CustomMainBox } from '../../Components/CustomMainBox'
import { Header } from '../../Components/Header'

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
