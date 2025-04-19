import { useState } from 'react';
import './App.css';
import { PdfFile } from './components/pdf-file';
import './MenuBar.css';

const MenuBar = ({ items }: any) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setActiveItem(item);

    // Scroll to section
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Remove underline after 1 second
    setTimeout(() => {
      setActiveItem(null);
    }, 1000);
  };


  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
        {items.map((item: string) => (
          <li
            key={item}
            className="menu-item"
            style={{
              marginRight: '20px',
              cursor: 'pointer',
              position: 'relative',
            }}
            onClick={() => handleItemClick(item)}
          >
            {item}
            {activeItem === item && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'black',
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};


function App() {
  const menuItems = ['Home', 'Resume', 'Recommendations'];

  return (
    <div className="App">
      <header className="App-header">
        <MenuBar items={menuItems} />
        <div id="Home" className="Home">
          <h1>
            Ms. Hillary Vance
          </h1>
          <h2>
            Hello!
          </h2>
          <p className="About-me">
            I am proud to be on this journey as an educator with deep roots in the Snoqualmie Valley. I was born and raised in the beautiful Snoqualmie Valley, attending Fall City Elementary and later graduating from Mount Si High School in 2009. My passion for understanding people led me to Central Washington University, where I earned my bachelor's degree in Psychology.
          </p>
          <p className="About-me">
            My love for teaching led me to pursue my Master's in Elementary Education from Western Governors University.
          </p>
          <p className="About-me">
            As part of my journey, I completed my student teaching in the Lake Washington School District, where I gained invaluable hands-on experience working with students and fostering a positive learning environment. That experience reinforced my belief in creating engaging, supportive, and inclusive classrooms where every student can thrive.
          </p>
          <p className="About-me">
            I'm so excited to continue growing as an educator and making a meaningful impact in the lives of my students!
          </p>
        </div>
        <PdfFile id='Resume' title='Resume' fileUrl={new URL('../assets/RESUME.pdf', import.meta.url)} />
        <PdfFile id='Recommendations' title='Recommendations' fileUrl={new URL('../assets/Hillary Vance Recommendation Letter.pdf', import.meta.url)} />
      </header >
    </div >
  );
}

export default App;
