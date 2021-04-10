import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    padding-left: 7.5%;
`

export const Glass = styled(motion.div)`
    height: 85vh;
    width: 85%;  
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    border-radius: 1rem;
    padding: 1.5rem;
`
export const Card = styled(motion.div)`
    background: white;
    box-shadow: 10px 10px 20px rgba(160, 149, 244, 0.5);
    border-radius: 1rem;
    text-align: center;
`