import { Typography, List, ListItem, ListItemText } from '@mui/material';

function IngredientesList({ ingredientes }) {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mt: 3, mb: 2 }}>
        📝 Ingredientes
      </Typography>
      <List>
        {ingredientes.map((ing, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <ListItemText
              primary={`${ing.cantidad} ${ing.unidad}`}
              secondary={ing.nombre}
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default IngredientesList;