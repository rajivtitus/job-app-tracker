import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    padding: 2.5rem;
    padding-left: 15%;
`
export const Card = styled(motion.div)`
    background: white;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    overflow: hidden;
`