import { useEffect, useState } from "react";
import ListaIngredientes from "../components/receta/RecetasList.jsx";
import { RecetaProvider } from "../contexts/RecetaContext.jsx";
import { Container, Typography, Alert } from "@mui/material";

import recetasData from '../data/recetas.json';//aca lo llamo

function RecetaPage() {
    
    const [productos, setProductos] = useState([recetasData]); //Hago la vinculacion con el json de recetas.
    const [hasError, setError] = useState(false);

    return (
        <RecetaProvider>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    gutterBottom 
                    align="center"
                    sx={{ mb: 4 }}
                >
                    Mi Receta
                </Typography>
                
                {hasError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        ¡Ha ocurrido un error al cargar la receta!
                    </Alert>
                )}

                <ListaIngredientes titulo={"ingredientes"} productos={productos}/>
            </Container>
        </RecetaProvider>
    )
}

export default RecetaPage;
