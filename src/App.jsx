import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.JS';
import Header from './Components/Header/Header';
import CoreConcepts from './Components/CoreConcepts/CoreConcepts';
import TabButton from './Components/TabButton/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

const handleSelect = (selectedButton) => {
  //selectedButton => 'component', 'jsx', 'state', 'props'
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
};

  return (
    <>
    <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((conceptItem) => 
                <CoreConcepts 
                  key={conceptItem.title} 
                  {...conceptItem}
                />
              )}
            </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'Components'}
              onSelect={() => handleSelect('Components')}>
                Component
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'}  
              onSelect={() => handleSelect('jsx')}>
                JSX
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'}  
              onSelect={() => handleSelect('props')}>
                Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>
                State
            </TabButton>
          </menu>
            {!selectedTopic ? <p>Please select a topic</p> : 
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
        </section>
      </main>
    </>
  );
};

export default App;
