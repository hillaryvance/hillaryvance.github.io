import { useState } from 'react';
import './App.css';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

function MyApp() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file='' onLoadSuccess={onDocumentLoadSuccess} options={options}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ms. Hillary Vance
        </h1>
        <h2>
          Hello
        </h2>
        <p className="About-me">
          I am proud to be on this journey as an educator with deep roots in the Snoqualmie Valley. I was born and raised in the beautiful Snoqualmie Valley, attending Fall City Elementary and later graduating from Mount Si High School in 2009. My passion for understanding people led me to Central Washington University, where I earned my bachelor's degree in Psychology.
        </p>
        <p className="About-me">
          My love for teaching led me to pursue my Master's in Elementary Education from Western Governors University. As part of my journey, I completed my student teaching in the Lake Washington School District, where I gained invaluable hands-on experience working with students and fostering a positive learning environment. That experience reinforced my belief in creating engaging, supportive, and inclusive classrooms where every student can thrive.
        </p>
        <p className="About-me">
          I'm so excited to continue growing as an educator and making a meaningful impact in the lives of my students!
        </p>
        {/* <MyApp /> */}
      </header>
    </div>
  );
}

export default App;
