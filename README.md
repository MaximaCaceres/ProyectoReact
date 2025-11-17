# Aplicación de Recetas - [Maxima Caceres]

## Descripción
Aplicación web completa de recetas de cocina desarrollada con React que permite visualizar un catálogo de recetas, acceder al detalle completo de cada una, gestionar favoritos, buscar recetas, filtrar por dificultad y acceder a consejos de cocina. Interfaz moderna, minimalista y completamente responsive construida con Material-UI, con sistema de autenticación y modo oscuro/claro.

## Tecnologías Utilizadas
- React 19.1.1
- React Router DOM 7.8.2
- Material-UI 7.3.2
- Vite

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el proyecto:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador: `http://localhost:5173`

## Credenciales de Acceso
```
Usuario: admin
Contraseña: admin123
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── auth/
│   │   └── ProtectedRoute.jsx
│   ├── recetas/
│   │   ├── RecetaCard.jsx
│   │   ├── RecetasList.jsx
│   │   ├── RecetaDetalle.jsx
│   │   ├── IngredientesList.jsx
│   │   ├── RecetaDelDia.jsx
│   │   ├── TipsCocina.jsx
│   │   ├── Testimonios.jsx
│   │   └── Estadisticas.jsx
│   └── layout/
│       └── Navbar.jsx
├── contexts/
│   ├── RecetaContext.jsx
│   ├── AuthContext.jsx
│   ├── FavoritosContext.jsx
│   └── ThemeContext.jsx
├── data/
│   ├── recetas.json
│   ├── login.json
│   └── protected-data.json
├── pages/
│   ├── InicioPage.jsx
│   ├── RecetasListPage.jsx
│   ├── RecetaDetallePage.jsx
│   ├── FavoritosPage.jsx
│   ├── TipsPage.jsx
│   ├── ContactoPage.jsx
│   └── LoginPage.jsx
├── App.jsx
└── main.jsx
```

## Funcionalidades

### Sistema de Autenticación
- Login con validación de credenciales
- Protección de rutas privadas con ProtectedRoute
- Persistencia de sesión con localStorage
- Logout con redirección automática

### Página de Inicio (/)
- Hero section con llamado a la acción
- Estadísticas de la aplicación (recetas, usuarios, calificaciones)
- Receta destacada del día con imagen y detalles completos
- Sección de características principales
- Tips de cocina destacados
- Testimonios de usuarios con sistema de calificación
- Call to action final

### Listado de Recetas (/recetas)
- Grid responsivo de tarjetas de recetas
- Búsqueda global integrada en la navbar (busca en título, descripción y categoría)
- Filtros por dificultad (Todas, Fácil, Media, Difícil)
- Botón de favorito en cada tarjeta
- Contador dinámico de resultados
- Cada tarjeta muestra: imagen, título, descripción, tiempo, dificultad y porciones
- Animaciones hover con elevación
- Manejo de estado vacío cuando no hay resultados

### Detalle de Receta (/recetas/:id)
- Imagen destacada de la receta
- Información completa: título, descripción, tiempo, dificultad, porciones
- Lista detallada de ingredientes con cantidades y unidades
- Pasos de preparación numerados
- Botón para volver al listado
- Manejo de error 404 (receta no encontrada)
- Animación fade-in al cargar

### Favoritos (/favoritos)
- Sistema de gestión de recetas favoritas
- Persistencia en localStorage
- Botón para agregar/quitar favoritos desde cualquier tarjeta
- Contador de recetas favoritas
- Estado vacío con mensaje motivacional
- Mismas funcionalidades que el listado principal

### Tips de Cocina (/tips)
- 6 categorías de consejos profesionales:
  - Al Horno
  - A la Parrilla
  - En Olla (Guisos y Salsas)
  - Técnicas de Corte
  - Sazonado y Condimentos
  - Organización (Mise en Place)
- Accordions interactivos con expand/collapse
- Múltiples consejos detallados por categoría
- Iconos descriptivos para cada sección

### Contacto (/contacto)
- Formulario con validación de campos requeridos
- Campos: Nombre, Email, Mensaje
- Simulación de envío con feedback visual (Alert)
- Información de contacto adicional
- Sección de preguntas frecuentes
- Layout en grid responsive

### Navegación Global
- Navbar presente en todas las páginas
- Menú con 5 secciones: Inicio, Recetas, Favoritos, Tips, Contacto
- Búsqueda integrada en navbar
- Indicador visual de página activa
- Botón de cambio de tema (claro/oscuro)
- Información de usuario autenticado
- Botón de logout
- Responsive con menú adaptativo

### Gestión de Estado (Context API)
- **RecetaContext**: Manejo global de recetas con carga desde JSON
- **AuthContext**: Autenticación simulada con localStorage
- **FavoritosContext**: Gestión de favoritos con persistencia
- **ThemeContext**: Control de tema claro/oscuro con localStorage

### Tema y Diseño
- **Modo Claro**: Diseño minimalista con fondo blanco suave (#F9F9F9)
- **Modo Oscuro**: Tema elegante con fondo oscuro (#121212)
- Paleta de colores consistente (Primary: Negro/Gris, Secondary: Verde)
- Flat design con bordes sutiles
- Transiciones suaves en todos los elementos
- Animaciones hover profesionales
- Sistema de espaciado consistente

## Screenshots

### Login
<!-- AQUÍ VA: screenshots/login.png -->
![Login]((https://github.com/user-attachments/assets/2310e370-661e-489e-affc-6978e5f80773))

### Página de Inicio
<!-- AQUÍ VA: screenshots/inicio.png -->
![Inicio]((https://github.com/user-attachments/assets/394483f9-4ef0-4258-bdd8-1b411e312dba))

### Listado de Recetas
<!-- AQUÍ VA: screenshots/listado.png -->
![Listado]((https://github.com/user-attachments/assets/e4a92066-9786-4c62-b2b0-6203a3febca7))

### Detalle de Receta
<!-- AQUÍ VA: screenshots/detalle.png -->
![Detalle]((https://github.com/user-attachments/assets/8ce1de64-ffc7-4821-800c-9091b8cbe255))

### Favoritos
<!-- AQUÍ VA: screenshots/favoritos.png -->
![Favoritos]((https://github.com/user-attachments/assets/55634884-b00a-4f89-a256-160f503bccbf))

### Tips de Cocina
<!-- AQUÍ VA: screenshots/tips.png -->
![Tips]((https://github.com/user-attachments/assets/4b607689-1e03-4e4e-85ca-91e7b7022e6b))

### Contacto
<!-- AQUÍ VA: screenshots/contacto.png -->
![Contacto]((https://github.com/user-attachments/assets/ab0ac588-ee78-4fc7-bc2c-0f8df24eb4e2))

### Modo Claro
<!-- AQUÍ VA: screenshots/dark-mode.png -->
![Modo Oscuro]((https://github.com/user-attachments/assets/031292b4-3de4-4da8-8086-db990f95eff3))

## Datos de la Aplicación

### Recetas Incluidas
1. **Pasta Carbonara** - Media - 30 minutos - 4 porciones
2. **Ensalada César** - Fácil - 20 minutos - 2 porciones
3. **Pizza Margherita** - Media - 45 minutos - 4 porciones
4. **Brownie de Chocolate** - Fácil - 40 minutos - 8 porciones
5. **Sopa de Tomate** - Fácil - 35 minutos - 4 porciones
6. **Tacos al Pastor** - Difícil - 50 minutos - 6 porciones

Cada receta incluye: título, descripción, imagen, tiempo de preparación, nivel de dificultad, número de porciones, lista completa de ingredientes (con cantidades y unidades) y pasos de preparación detallados.

## Características Técnicas Destacadas

### Rutas Implementadas
- `/login` - Autenticación (ruta pública)
- `/` - Inicio (ruta protegida)
- `/recetas` - Listado con búsqueda y filtros (ruta protegida)
- `/recetas/:id` - Detalle dinámico (ruta protegida)
- `/favoritos` - Gestión de favoritos (ruta protegida)
- `/tips` - Consejos de cocina (ruta protegida)
- `/contacto` - Formulario de contacto (ruta protegida)

### Hooks de React Utilizados
- `useState` - Gestión de estado local
- `useEffect` - Efectos secundarios y carga de datos
- `useContext` - Consumo de contextos
- `useNavigate` - Navegación programática
- `useParams` - Parámetros dinámicos de URL
- `useLocation` - Información de ruta actual
- `useSearchParams` - Query strings para búsqueda
- `useMemo` - Optimización de cálculos (tema)

### Componentes de Material-UI
Container, Box, Grid, Stack, Card, CardMedia, CardContent, CardActions, Typography, Button, IconButton, Chip, TextField, InputAdornment, AppBar, Toolbar, Menu, MenuItem, ToggleButtonGroup, ToggleButton, Accordion, AccordionSummary, AccordionDetails, Paper, Alert, CircularProgress, Avatar, Rating, Fade

### Persistencia de Datos
- Sesión de usuario (localStorage)
- Recetas favoritas (localStorage)
- Preferencia de tema (localStorage)

### Manejo de Estados
- Estados de carga (loading)
- Estados de error (404, errores de red)
- Estados vacíos (sin resultados, sin favoritos)
- Feedback visual de acciones (envío de formulario)

## Funcionalidades Extra Implementadas

✅ Página de inicio completa con hero, estadísticas y testimonios  
✅ Sistema de favoritos con persistencia  
✅ Búsqueda global en navbar  
✅ Filtros por dificultad  
✅ Página de tips con accordions  
✅ Página de contacto con formulario  
✅ Sistema de autenticación completo  
✅ Modo oscuro/claro con toggle  
✅ Animaciones y transiciones suaves  
✅ Manejo de errores 404  
✅ Estados de carga y vacío  
✅ Diseño minimalista flat  
✅ Responsive design  

## Buenas Prácticas Aplicadas

✅ Componentes modulares y reutilizables  
✅ Separación de responsabilidades (Context, Components, Pages)  
✅ Nomenclatura clara y consistente  
✅ Custom hooks (useRecetas, useAuth, useFavoritos, useThemeMode)  
✅ Código limpio y organizado  
✅ Estructura de carpetas lógica  
✅ Manejo adecuado de errores  
✅ Validación de formularios  
✅ Optimización de renderizado  
✅ PropTypes implícitos mediante destructuring  

## Autor

**[Maxima Vanesa Caceres Alba]**  
Email: [maximavanecaceres@gmail.com]   

---

**Fecha de Entrega**: [17/11/25]  
**Institución**: [Universidad Tecnologica Nacional (UTN)]  
**Asignatura**: Programación IV

---

## Nota Final

Este proyecto supera ampliamente los requisitos mínimos del trabajo práctico, implementando funcionalidades avanzadas como sistema de autenticación, gestión de favoritos, búsqueda global, filtros interactivos, modo oscuro/claro, y múltiples páginas adicionales (Inicio, Tips, Contacto). Se aplicaron las mejores prácticas de desarrollo React y se logró un diseño profesional y minimalista.
