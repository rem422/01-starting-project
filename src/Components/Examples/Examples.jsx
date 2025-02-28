import { useState } from 'react';
import "./Examples.css"
import { EXAMPLES } from '../../data.js';
import Section from '../Section/Section';
import TabButton from '../TabButton/TabButton';
import Tabs from '../Tabs/Tabs.jsx';

const Examples = () => {

const [selectedTopic, setSelectedTopic] = useState('');

const handleSelect = (selectedButton) => {
  //selectedButton => 'component', 'jsx', 'state', 'props'
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
};

let tabContent = <p>Please select a topic</p>

if (selectedTopic) {
    tabContent = 
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
}

    return (
        <Section title='Examples' id='examples'>
            <Tabs 
                buttons={
                <>
                    <TabButton 
                        isSelected={selectedTopic === 'Components'}
                        onClick={() => handleSelect('Components')}>
                        Component
                    </TabButton>
                    <TabButton 
                        isSelected={selectedTopic === 'jsx'}  
                        onClick={() => handleSelect('jsx')}>
                        JSX
                    </TabButton>
                    <TabButton 
                        isSelected={selectedTopic === 'props'}  
                        onClick={() => handleSelect('props')}>
                        Props
                    </TabButton>
                    <TabButton 
                        isSelected={selectedTopic === 'state'}
                        onClick={() => handleSelect('state')}>
                        State
                    </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
    </Section>
    )
}

export default Examples