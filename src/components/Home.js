import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <div>
            <Container>
                <Section
                    title="Model S"
                    description="Order online for touchless delivery"
                    backgroundimg="model-s.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory"
                />
                <Section
                    title="Model Y"
                    description="Order online for touchless delivery"
                    backgroundimg="model-y.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory"
                />
                <Section
                    title="Model 3"
                    description="Order online for touchless delivery"
                    backgroundimg="model-3.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory"
                />
                <Section
                    title="Model X"
                    description="Order online for touchless delivery"
                    backgroundimg="model-x.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory"
                />
                <Section
                    title="Solar Panel"
                    description="Lowest Cost Solar Panels in America"
                    backgroundimg="solar-panel.jpg"
                    leftbutton="Order now"
                    rightbutton="Learn more"
                />
                <Section
                    title="Solar Roof"
                    description="Produce Clean Energy From Your Roof"
                    backgroundimg="solar-roof.jpg"
                    leftbutton="Order now"
                    rightbutton="Learn more"
                />
                <Section
                    title="Accessories"
                    backgroundimg="accessories.jpg"
                    leftbutton="shop now"
                />
            </Container>
        </div>
    )
}

export default Home


const Container = styled.div`
height:100vh;
`