import React from 'react'
import { ItemListContainer } from '../components/ItemListContainer'
import NavBar from '../components/NavBar'
import { ItemCount } from '../components/ItemCount'
export const Productos = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ItemListContainer>
                <ItemCount/>
            </ItemListContainer>
        </div>
    )
}
