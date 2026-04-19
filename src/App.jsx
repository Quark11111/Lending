import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Feature from './components/Feature'

const featureData = [{id: 1, title: 'Fast', text: 'All flying'}, {id: 2, title: 'Reliably', text: 'Git with ctrl'}];

function App() {

  return (
    <>
      <div className='App'>
        <Hero title="Hi, Git!" text="We did it" buttonText="More" />
        <div className='feature-container'>
        {featureData.map(item => <Feature title={item.title} text={item.text} key={item.id} />)}
        </div>
      </div>
    </>
  )
}

export default App
