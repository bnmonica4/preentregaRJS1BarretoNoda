import ButtonComponent from './Button.Component.jsx';
import CartWidget from './CartWidget.jsx';

export default function Navbar() {

    const caracteristicas = [
        {
            color: 'purple',
            texto: 'Women',
        },
    
        {
            color: 'yellow',
            texto: 'Men',
        },
    
        {
            color: 'green',
            texto: 'Conctacto',
        },
    ];
    
    const dispararConsola = () => {
        console.log('Hola');
    };

    return (
        <>
        <ButtonComponent 
            texto={caracteristicas[0].texto} 
            color={caracteristicas[0].color} 
            reaccionarAClick={dispararConsola}
        />
        <ButtonComponent texto={caracteristicas[1].texto} 
            color={caracteristicas[1].color} 
            reaccionarAClick={dispararConsola}
        />
        <ButtonComponent 
            texto={caracteristicas[2].texto} 
            color={caracteristicas[2].color} 
            reaccionarAClick={dispararConsola}
        />
        <CartWidget />
        </>
    )
}