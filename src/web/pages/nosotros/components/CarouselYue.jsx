import Carousel from 'react-material-ui-carousel'
import { ImageListItem, ImageListItemBar } from '@mui/material'

import '../styles/carousel.css';
import teotihuacan from '../../../../img/teotihuacan.webp';
import cdmx from '../../../../img/ruta2.webp';
import mexico1 from '../../../../img/mexico1.webp';

function Item(props)
{
    return (
        <ImageListItem key={props.item.image} className='carousel-image'>
            <img src={`${props.item.image}?w=248&fit=crop&auto=format`} 
                alt={props.item.description} 
                loading='lazy'
            />
            <ImageListItemBar
                className='carousel-title'
                title={props.item.description}
            >
            </ImageListItemBar>
        </ImageListItem>
    )
}


export const CarouselYue = () => {
    var items = [
        {
            image: teotihuacan,
            title: 'Teotihuacan',
            description: "Viaja por todo México"
        },
        {
            image: cdmx,
            title: 'Cultura',
            description: "Conoce nuestra cultura"
        },
        {
            image: mexico1,
            title: 'México',
            description: "Descubre México"
        }
    ]

    return (
        <div className='carousel-grid'>
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    )
}