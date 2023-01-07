import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import LogoutIcon from '@mui/icons-material/Logout'
import CustomIconButton from '../CustomIconButton/CustomIconButton'
import { clearLocalStorage, getToken } from '../../helpers/localStorageHelper'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

const pages = ['Home', 'Cats', 'Dogs', 'Costumers']

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { newAxiosRequest } = useAxios({})
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  useEffect(() => {
    const isAuth = async () => {
      const token = getToken()
      const axiosResponse = await newAxiosRequest({
        url: 'http://localhost:3000/costumers',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      if (!axiosResponse) {
        handleLogout()
      }
    }
    isAuth()
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleRedirect = (page: string) => {
    const route = `/${page.toLowerCase()}`
    handleCloseNavMenu()
    return navigate(route)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleLogout = () => {
    clearLocalStorage()
    return navigate('/')
  }

  return (
    <AppBar
      component="header"
      color="secondary"
      sx={{ position: 'fixed', top: 0, zIndex: 2 }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              filter: 'brightness(0) invert(1)'
            }}
          >
            <img
              width="200px"
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="SharenergyLogo"
            />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <CustomIconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </CustomIconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={() => handleRedirect(page)} key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              filter: 'brightness(0) invert(1)'
            }}
          >
            <img
              width="150px"
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="sharenergylogo"
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleRedirect(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <CustomIconButton onClick={handleLogout}>
              <LogoutIcon />
            </CustomIconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
