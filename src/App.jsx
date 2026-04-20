import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Footer from './components/Footer'
import { useEffect } from 'react'

const featureData = [{id: 1, title: 'Fast', text: 'All flying'}, {id: 2, title: 'Reliably', text: 'Git with ctrl'}];

function App() {
  const [email, setEmail] = useState(localStorage.getItem('myEmail') || '');

  useEffect(() => {
    localStorage.setItem('myEmail', email);
  }, [email]);

  const handleSubscride = () => {
    alert(`Sucrisbilly! We get new in: ${email}`);

    setEmail('');

    localStorage.removeItem('myEmail');
  };
    

  return (
    <>
      <div className='App'>
        <Hero title="Hi, Git!" text="We did it" buttonText="More" />
        <div className='feature-container'>
        {featureData.map(item => <Feature title={item.title} text={item.text} key={item.id} />)}
        </div>
        <section className='follow'>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleSubscride}>Subscride</button>
          <p>Your input: {email}</p>
          {email.length > 0 && email.length < 5 && <p style={{ color: 'red'}}>Few sumbols</p>}
        </section>
      <Footer />
      </div>
    </>
  )
}

export default App
