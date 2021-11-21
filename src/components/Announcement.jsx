import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 39px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 550;
`;

const Announcement = () => {
    return (
        <Container>
            Bon Plan! Bon Plan! Bon Plan!
            Get Free Shipping for the minimum purchase of £25.
        </Container>
    )
}

export default Announcement
