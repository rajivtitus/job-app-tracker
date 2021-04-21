import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    padding: 2.5rem;
    padding-left: 16%;
    @media (max-width: 1176px) {
        padding: 2.5rem;
    }

    @media (max-width: 768px) {
        padding: 2.5rem 1rem;
    }
`
export const Card = styled(motion.div)`
    background: white;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
`

export const Button1 = styled.button`
    min-width: 8.5rem;
    padding: 1rem 1.5rem;
    margin: 0.75rem 0rem;
    background: #323c47;
    color: white;
    
    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
    }

`

export const Button2 = styled.button`
    padding: 0.75rem;
    background: none;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid gray;
      }
`

export const Select = styled.select`
    min-width: 7.5rem;
    border: none;
    outline: none;
    background: #fbfbfb;
    color: #60666d;
    border-radius: 0.25rem;
    padding: 0.15rem 0.25rem;
    
`