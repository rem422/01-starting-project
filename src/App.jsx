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
              <CoreConcepts
                img= {CORE_CONCEPTS[0].image}
                title= {CORE_CONCEPTS[0].title}
                description= {CORE_CONCEPTS[0].description}
              />
              <CoreConcepts
                img= {CORE_CONCEPTS[1].image}
                title= {CORE_CONCEPTS[1].title}
                description= {CORE_CONCEPTS[1].description}
              />
              <CoreConcepts
                img= {CORE_CONCEPTS[2].image}
                title= {CORE_CONCEPTS[2].title}
                description= {CORE_CONCEPTS[2].description}
              />
              <CoreConcepts
                img= {CORE_CONCEPTS[3].image}
                title= {CORE_CONCEPTS[3].title}
                description= {CORE_CONCEPTS[3].description}
              />
              {/* Image does not show */}
              {/* <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
            </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Component</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
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
