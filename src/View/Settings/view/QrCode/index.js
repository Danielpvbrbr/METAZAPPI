import {
    Container,
    AreaInfoCode,
    ButtonLoad
} from './styles';
import QRCode from '../../../../Img/qrcode.png';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function QrCode({ }) {
    // const [isMenu, setIsMenu] = useState(false);

    return (
        <Container>
            <AreaInfoCode>
                <section>
                    <p>
                        1°  Abra o WhatsApp no seu telemóvel <br />
                        2°  Toque no menu <br />
                        3°  Clicka em Aprarelhos conectados <br />
                        4°  Clicka  em Conectar um Aparelho <br />
                        5°  Use a câmara para ler este código
                    </p>
                    <Stack direction="row" spacing={1}>
                        {false ?
                            <Button variant="contained" color="error">
                                Desconectar
                            </Button>
                            :
                            <ButtonLoad>
                                <LoadingButton loading />
                            </ButtonLoad>
                        }
                    </Stack>
                </section>
                <img src={QRCode} alt='qrcode' />
            </AreaInfoCode>
        </Container>
    )
}