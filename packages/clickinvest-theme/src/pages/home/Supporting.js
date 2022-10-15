import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack } from '../../components/styled';

const Supporting = () => {
    return (
        <Box sx={{ py: 7, bgcolor: '#fffff' }} >
            <Container maxWidth="lg">
                <Stack sx={{ mb: 2 }}>
                    <Stack alignItems='left' sx={{ pb: 0 }}>
                        <Typography variant='h4' sx={{ fontSize: 36, fontWeight: 700, color: '#000', textAlign: 'left', mb: 2.5 }}>
                            Supporting Pittsburgh
                        </Typography>
                        <HStack>
                            <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                        </HStack>
                    </Stack>
                    <Typography>Hailed as the Steel City and City of Bridges of America, Pittsburgh is home to the steel industry. The industrialization of Pittsburgh over the years has been improving non-stop.</Typography>
                    <Typography>Because of the number of steel bridges and buildings, it’s no wonder why Pittsburgh residents own vehicles as means of transportation. With the use of cars, residents can freely go wherever they want in Pittsburgh.</Typography>
                    <Typography>Hence, there is a need for garages for every homeowner. A garage is where they keep their car and other belongings. In other words, it serves as storage for your belongings and equipment.</Typography>
                    <Typography>Thus, garage doors are needed to protect your garage fully. Since they provide security and convenience, they are worth investing in. What’s more, they can last for a maximum of 20 years when taken care of well.</Typography>
                </Stack>
                <Stack>
                    <Typography variant='h4' sx={{ fontSize: 26, fontWeight: 700, color: '#000', textAlign: 'left', mb: 2.5 }}>
                        How We Fix Garage Doors
                    </Typography>
                    <Typography>Hailed as the Steel City and City of Bridges of America, Pittsburgh is home to the steel industry. The industrialization of Pittsburgh over the years has been improving non-stop.</Typography>
                    <Typography>Because of the number of steel bridges and buildings, it’s no wonder why Pittsburgh residents own vehicles as means of transportation. With the use of cars, residents can freely go wherever they want in Pittsburgh.</Typography>
                    <Typography>Hence, there is a need for garages for every homeowner. A garage is where they keep their car and other belongings. In other words, it serves as storage for your belongings and equipment.</Typography>
                    <Typography>Thus, garage doors are needed to protect your garage fully. Since they provide security and convenience, they are worth investing in. What’s more, they can last for a maximum of 20 years when taken care of well.</Typography>
                </Stack>
            </Container>
        </Box>
    );
}

export default Supporting;