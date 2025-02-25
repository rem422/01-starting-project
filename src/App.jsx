import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.JS';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
};

function Header () {
    const description = reactDescriptions[genRandomInt(2)];

  return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
  );
};

function CoreConcepts({img, title, description}) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

function App() {
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
      </main>
    </>
  );
};

export default App;
