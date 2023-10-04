import '../node_modules/bulma/css/bulma.css'
import './App.css'
import Course from './components/Course'
import Angular from './assets/angular.jpg'
import Bootstrap from './assets/bootstrap5.png'
import Csharp from './assets/ccsharp.png'
import KompleWeb from './assets/kompleweb.jpg'

function App() {

  return (
    <div className='App'>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Kurslarım
          </p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course 
          image={Angular}
          title="Angular" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maxime nulla vero accusamus eaque praesentium veritatis commodi animi neque corporis."
          />
          </div>
          <div className='column'>
          <Course 
          image={Bootstrap}
          title="Bootstrap" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maxime nulla vero accusamus eaque praesentium veritatis commodi animi neque corporis."
          />
          </div>
          <div className='column'>
          <Course 
          image={Csharp}
          title="Csharp" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maxime nulla vero accusamus eaque praesentium veritatis commodi animi neque corporis."
          />
          </div>
          <div className='column'>
          <Course 
          image={KompleWeb}
          title="Komple Web" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maxime nulla vero accusamus eaque praesentium veritatis commodi animi neque corporis."
          />
          </div>
        </div>
        </section>
      </div>
    </div>
  )
} 

export default App
