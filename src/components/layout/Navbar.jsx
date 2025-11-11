import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Button, 
  Box, 
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  TextField,
  InputAdornment
} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Restaurant, 
  Logout, 
  Brightness4, 
  Brightness7,
  Menu as MenuIcon,
  Home,
  Favorite,
  Kitchen,
  Search,
  ContactMail
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import { useThemeMode } from '../../contexts/ThemeContext';
import { useState } from 'react';

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const { mode, toggleColorMode } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      navigate(`/recetas?search=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue('');
    }
  };

  const menuItems = [
    { label: 'Inicio', path: '/', icon: <Home /> },
    { label: 'Recetas', path: '/recetas', icon: <Restaurant /> },
    { label: 'Favoritos', path: '/favoritos', icon: <Favorite /> },
    { label: 'Tips', path: '/tips', icon: <Kitchen /> },
    { label: 'Contacto', path: '/contacto', icon: <ContactMail /> },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar 
      position="static" 
      color="default"
      sx={{ 
        mb: 4,
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          {/* Logo */}
          <Restaurant sx={{ mr: 1, display: { xs: 'none', md: 'flex' } }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              display: { xs: 'none', md: 'flex' },
              '&:hover': {
                color: 'secondary.main'
              }
            }}
          >
            Recetas
          </Typography>

          {/* Menu Mobile */}
          {isMobile && isAuthenticated && (
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      handleMenuClose();
                    }}
                    selected={isActivePath(item.path)}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {item.icon}
                      {item.label}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Logo Mobile */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              display: { xs: 'flex', md: 'none' }
            }}
          >
            Recetas
          </Typography>

          {/* Menu Desktop */}
          {!isMobile && isAuthenticated && (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  startIcon={item.icon}
                  sx={{
                    color: isActivePath(item.path) ? 'secondary.main' : 'text.primary',
                    fontWeight: isActivePath(item.path) ? 600 : 400,
                    '&:hover': {
                      color: 'secondary.main',
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ flexGrow: 1 }} />

          {/* Barra de Búsqueda */}
          {isAuthenticated && (
            <TextField
              size="small"
              placeholder="Buscar recetas..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={handleSearch}
              sx={{
                width: { xs: '150px', sm: '200px', md: '250px' },
                display: { xs: 'none', sm: 'block' }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          )}

          {/* Botones de acción */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Botón búsqueda móvil */}
            {isAuthenticated && (
              <IconButton 
                sx={{ display: { xs: 'flex', sm: 'none' } }}
                onClick={() => navigate('/recetas')}
              >
                <Search />
              </IconButton>
            )}

            {/* Botón modo oscuro */}
            <IconButton onClick={toggleColorMode} color="inherit">
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {isAuthenticated && (
              <>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    display: { xs: 'none', md: 'block' },
                    mr: 1,
                    color: 'text.secondary'
                  }}
                >
                  {user?.nombre || user?.username}
                </Typography>
                <Button
                  color="inherit"
                  startIcon={<Logout />}
                  onClick={handleLogout}
                  size="small"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  Salir
                </Button>
                <IconButton
                  onClick={handleLogout}
                  color="inherit"
                  sx={{ display: { xs: 'flex', sm: 'none' } }}
                >
                  <Logout />
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;