import {
    Container,
} from './styles'


export default function LineMenu({ color, isMenu, title, Icon, size, onClick }) {

    return (
        <Container isMenu={isMenu} onClick={onClick}>
            <Icon color={color} size={size} cursor='pointer' />
            {isMenu &&
                <h1>{title}</h1>
            }
        </Container>
    )
}