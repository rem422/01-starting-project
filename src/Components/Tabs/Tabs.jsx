import React from 'react'

const Tabs = ({children, buttons, ButtonsContainer = 'menu'}) => {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}

export default Tabs