import { Container } from '@mui/material';
import RecetaDetalle from '../components/receta/RecetaDetalle.jsx';

function RecetaDetallePage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <RecetaDetalle />
    </Container>
  );
}

export default RecetaDetallePage;