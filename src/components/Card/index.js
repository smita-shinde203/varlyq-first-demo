import { Button, Flex, Heading, SimpleGrid, Text, Link, Circle, Box } from "@chakra-ui/react"
import NextImage from 'next/image'
import RectOne from '../../../public/rect.png'
import Rect2 from '../../../public/Rect2.png'
import Rect3 from '../../../public/Rect3.png'
import Rect4 from '../../../public/Rect4.png'
import Rect5 from '../../../public/Rect5.png'
import Rect6 from '../../../public/Rect6.png'
import Rect7 from '../../../public/Rect7.png'
import Rect8 from '../../../public/Rect8.png'
import EtherIamge from '../../../public/ether.png'
import fire from '../../../public/fire.png'
import ETH from '../../../public/ETH.png'
import NextLink from 'next/link'
import styles from './card.module.css'

export const Card = () => {
    return (
        <Flex w="100%" bg='primary' justify="center" direction='column' mx='auto' align='center' >
            <Flex direction='row' align='center' justify='center' mx='auto' w='100%' >
                <Heading color='#9C00E8' fontSize='20px' fontWeight='extrabold' >Nft   </Heading>
                <Text color='transparent'>..</Text>
                <Heading color='#9C00E8' fontSize='18px' fontWeight='normal'>Marketplace</Heading>
                <Circle dir={['none', 'none', 'flex', 'flex']} style={{ filter: "blur(600px)" }} mt={1} opacity='0.1' shadow='200px' w='500px' h="500px" bg='#052FC2' ml={-80} position='absolute' />
            </Flex>
            <Flex mx='auto' align='center' w='100%' justify='center'>
                <Text
                    fontSize={{ sm: '20px', md: '38px' }}
                    fontWeight='700'
                    color='secondary'
                    align='center'
                    letterSpacing='6%'
                >
                    Hot Drops
                </Text>
                <Box h="30px" w='30px'>
                    <NextImage src={fire} layout='responsive' />
                </Box>
            </Flex>
            <Flex justifyContent='center' width='80%' mt='62px' align='center'

            >
                {ExploreArr?.map((item, index) => {
                    return <NextLink key={index} href={item.link} passHref>
                        <Link p={{ sm: "2px 4px", md: '5px 10px', xl: "10px 25px" }} mx='auto' justify='center' borderRadius={{ sm: "10", md: "15" }} bg='#061033' color="navLinkColor">
                            <Text fontSize={{ sm: "6px", md: '14px' }} color='#2A5AFA'  >
                                {item.title}
                            </Text>
                        </Link>
                    </NextLink>
                })
                }
            </Flex>
            <Flex w="100%" justify="center" py="10" mt={10}  >
                <SimpleGrid columns={{ md: '2', lg: '3', xl: '3', '2xl': '4' }} spacing="20"  >
                    {CardArr.map((item, index) =>
                        <Flex key={index} >
                            <CardComponent image={item.image} title={item.title} desc={item.desc} ether={item.ether} etherImage={item.etherImage} />
                        </Flex>
                    )}
                </SimpleGrid>
            </Flex>
            <Button
                bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'
                w={{ sm: '80px', md: '130px', lg: '145px', xl: '160px', '2xl': '186px' }}
                h={{ sm: '30px', md: '50px', lg: '40px', xl: '50px', '2xl': '55px' }}
                fontSize={{ sm: '8px', md: '12px', lg: '14px', xl: '16px' }}
                borderRadius={{ sm: '10px', md: '20px' }}
                box-shadow='4px 38px 62px'
                fontWeight='500'
                variant='link'
                letterSpacing='50%'
                color='secondary'
                data-aos="zoom-down"

            >
                View More
            </Button>
        </Flex>
    )
}
const ExploreArr = [
    {
        link: "#",
        title: "Music"
    },
    {
        link: "#",
        title: "Sports"
    },
    {
        link: "#",
        title: "Arts"
    },
    {
        link: "#",
        title: "Community"
    },
    {
        link: "#",
        title: "Trading Card"
    },
    {
        link: "#",
        title: "Virtual World"
    },
    {
        link: "#",
        title: "Videos"
    },
    {
        link: "#",
        title: "More"
    },
]

const CardArr = [
    {
        image: RectOne,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge
    },
    {
        image: Rect2,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect3,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect4,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect5,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect6,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect7,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect8,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    },
]

const CardComponent = ({ image, title, desc, ether, etherImage }) => {
    return <Flex p="4" bg="#171717" w={{ sm: '250px', md: '260px' }} h={{ sm: '300px', md: '380px' }} borderRadius="16px" direction="column" align='center' data-aos="zoom-in" className={styles.hoverController} >
        
        <NextImage src={image} width="233px" height="267px" alt="logo-image"></NextImage>
        <Flex justify='space-between' w='100%'>
            <Text fontSize="18px" color="secondary" mt="2">{title}</Text>
            <Text fontSize="18px" color='secondary' mt="2">...</Text>
        </Flex>
        <Flex align='flex-start' w='100%' >
            <Text color="#959595" mt='1' fontSize='14px'>
                {desc}
            </Text>
        </Flex>
        <Flex justify="space-between" w='100%' align='center' mt='5px' alignContent='center' >
            <Text fontSize='14px' color="customBlue">{ether}</Text>
            <Circle h='20px' w='20px' bg='#5F7FEC' >
                <NextImage src={ETH} h='200px' w='200px' />
            </Circle>
        </Flex>

            <HoverButton   />
    </Flex>
}

const HoverButton = () => {
    return (
        <Button
            bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'
            w={{ sm: '80px', md: '130px' }}
            h={{ sm: '40px', md: '50px' }}
            fontSize={{ sm: '8px', md: '12px', lg: '14px', xl: '16px' }}
            borderRadius={{ sm: '10px', md: '20px' }}
            box-shadow='4px 38px 62px'
            fontWeight='500'
            variant='link'
            letterSpacing='50%'
            color='secondary'
            data-aos="zoom-down"
            className={styles.hoverCollectBtn}
        >
            Collect Now
        </Button>
    )
}

