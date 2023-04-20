import products from '../modules/lists';
import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemCount } from '../components/ItemCount';
import { CircularProgress } from '@mui/material';
import { useContext } from 'react';
import { cartContext } from '../App';

const hoverCard = {
    padding: '1em',
    margin: '1em',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.1)',
    }
};

function getItemsById(category) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            const results = products.filter((product) => product.category === category);
            resolve(results);
        }, 1000);
    });

    return promise;
}

export const Category = () => {
    const [product, setProduct] = useState({});
    let { itemCategory } = useParams();
    const [loading, setLoading] = useState(true); // initialize loading state

    const {cart} = useContext(cartContext)

    useEffect(() => {
        getItemsById(itemCategory).then((results) => {
            if (results.length > 0) {
                setProduct(results);
                console.log(results)
                setLoading(false);
            }
        });
    }, []);

    function addToCart(count){
    }

    console.log(product)

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="120vh"
        >
            {loading ? ( // check loading status and render progress component if true
                <CircularProgress sx={{ margin: '1em' }} />
            ) :  product.map((productAccesories)=>(
              <Paper elevation={5} sx={hoverCard} style={{ width: '100%', maxWidth: '350px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1em' }}>
                  <Typography variant='h5'>{productAccesories.title}</Typography>
              </Box>
              <img src={productAccesories.img} alt='img' style={{ width: '100%', marginBottom: '1em' }} />
              <Typography variant='h6' style={{ marginBottom: '1em' }}>{productAccesories.description}</Typography>
              <Typography variant='p' style={{ marginBottom: '1em' }}>{productAccesories.category}</Typography>
              <Typography variant='h6' style={{ marginBottom: '1em' }}>$ {productAccesories.price}</Typography>
              <ItemCount onAdd={addToCart} />
          </Paper>
            )
            )}
        </Box>
    )
}
