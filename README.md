# Mi Aplicación React

Una aplicación React moderna construida con Vite que demuestra el uso de React Router, Material UI, Context API y componentes organizados.

## 🚀 Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 7** - Herramienta de construcción rápida para desarrollo frontend
- **React Router DOM 7** - Enrutamiento declarativo para React
- **Material UI 7** - Biblioteca de componentes de React con diseño Material
- **Context API** - Manejo de estado global de React

## 📁 Estructura del Proyecto

```
my-react-app/
│
├── public/                     # Archivos estáticos públicos
│   └── vite.svg
│
├── src/                        # Código fuente de la aplicación
│   ├── assets/                 # Recursos estáticos (imágenes, iconos)
│   │   └── react.svg
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── MiBoton.jsx        # Componente de botón personalizado
│   │   ├── objects/           # Componentes relacionados con objetos
│   │   │   ├── ObjectsList.jsx
│   │   │   └── SingleObject.jsx
│   │   └── receta/            # Componentes relacionados con recetas
│   │       └── Lista.jsx
│   │
│   ├── contexts/              # Contextos de React para manejo de estado
│   │   ├── ObjectsContext.jsx
│   │   └── RecetaContext.jsx
│   │
│   ├── data/                  # Datos estáticos
│   │   └── productos.json
│   │
│   ├── pages/                 # Componentes de páginas principales
│   │   ├── objects.jsx
│   │   └── receta.jsx
│   │
│   ├── App.jsx                # Componente principal de la aplicación
│   ├── App.css                # Estilos del componente App
│   ├── index.css              # Estilos globales
│   └── main.jsx               # Punto de entrada de la aplicación
│
├── eslint.config.js           # Configuración de ESLint
├── index.html                 # Plantilla HTML principal
├── package.json               # Dependencias y scripts del proyecto
├── package-lock.json          # Lockfile de dependencias
├── vite.config.js             # Configuración de Vite
├── GUIA-MATERIAL-UI.md        # Guía de Material UI
└── GUIA-REACT-ROUTER-DOM.md   # Guía de React Router DOM
```

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd my-react-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación en modo desarrollo**
   ```bash
   npm run dev
   ```

La aplicación se abrirá en `http://localhost:5173`

## 🛠️ Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Hot Module Replacement |
| `npm run build` | Construye la aplicación para producción |
| `npm run lint` | Ejecuta ESLint para encontrar y reportar problemas en el código |
| `npm run preview` | Previsualiza la construcción de producción localmente |

## 🏗️ Funcionalidades

### Enrutamiento
La aplicación utiliza React Router DOM para la navegación entre páginas:
- **Página Principal (/)**: Redirige a la página de Objects
- **Objects (/objects)**: Muestra una lista de objetos con funcionalidad CRUD
- **Receta (/receta)**: Muestra componentes relacionados con recetas

### Manejo de Estado
- **Context API**: Se utiliza para manejar el estado global
- **ObjectsContext**: Gestiona el estado de los objetos
- **RecetaContext**: Gestiona el estado de las recetas

### Componentes
- **Componentes organizados por funcionalidad** en carpetas separadas
- **Material UI** para componentes de interfaz consistentes
- **Componentes reutilizables** como `MiBoton.jsx`

## 🎨 Estilos

La aplicación utiliza una combinación de:
- **CSS personalizado** (App.css, index.css)
- **Material UI** para componentes estilizados
- **Estilos inline** para navegación personalizada

## 📄 Dependencias Principales

### Dependencias de Producción
- `react` & `react-dom`: Biblioteca principal de React
- `react-router-dom`: Enrutamiento para aplicaciones React
- `@mui/material`, `@mui/icons-material`: Material UI para componentes
- `@emotion/react`, `@emotion/styled`: Motor de CSS-in-JS para Material UI

### Dependencias de Desarrollo
- `vite`: Herramienta de construcción y desarrollo
- `eslint`: Linter para JavaScript/React
- `@vitejs/plugin-react`: Plugin de Vite para React

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos construidos se generarán en la carpeta `dist/` y estarán listos para ser desplegados en cualquier servidor web estático.

## 📚 Recursos Adicionales

- [Guía de Material UI](./GUIA-MATERIAL-UI.md)
- [Guía de React Router DOM](./GUIA-REACT-ROUTER-DOM.md)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

⚡ **Desarrollado con Vite + React para un desarrollo rápido y eficiente**