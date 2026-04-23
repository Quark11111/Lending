import { useState } from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import UserCard from '../components/UserCard'
import { p } from 'framer-motion/client'

const featureData = [{id: 1, title: 'Fast', text: 'All flying'}, {id: 2, title: 'Reliably', text: 'Git with ctrl'}];

const Home = () => {
    const [subscribers, setSubscribers] = useState(JSON.parse(localStorage.getItem('subList')) || [] );
      const [email, setEmail] = useState(localStorage.getItem('myEmail') || ''); 
      const [users, setUsers] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        setIsLoading(true)
        setError(null);


        fetch('https://randomuser.me/api/')
        .then(response => { 
          if (!response.ok) throw new Error('Dont users');
          return response.json()})
        .then(data => {
          setUsers(data.results);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message)
          setIsLoading(false)
          console.error('Error: ', error)}) 
      }, []);
    
      useEffect(() => {
        localStorage.setItem('myEmail', email);
      }, [email]);

      useEffect(() => {
        localStorage.setItem('subList', JSON.stringify(subscribers));
      }, [subscribers]);
    
      const handleSubscribe = () => {
        alert(`Sucrisbilly! We get new in: ${email}`);
    
        setEmail('');
    
        setSubscribers([...subscribers, email]);
    
        localStorage.removeItem('myEmail');
      };
        
    
      const deletedSubscriber = (indexToDelete) => {
        const updateList = subscribers.filter((_, index) => index !== indexToDelete)
    
        setSubscribers(updateList);
      };

      return (
        <div className='App'>
        <Hero title="Hi, Git!" text="We did it" buttonText="More" />
        <div className='feature-container'>
        {featureData.map(item => <Feature title={item.title} text={item.text} key={item.id} />)}
        </div>
        <section className='follow'>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleSubscribe}>Subscride</button>
          <p>Your input: {email}</p>
          {email.length > 0 && email.length < 5 && <p style={{ color: 'red'}}>Few sumbols</p>}
          <ul>
            {subscribers.map((email, index) => (
              <li key={index}>{email}
              <button onClick={() => deletedSubscriber(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>
        <section>
          {error && <p>{error}</p>}
          {isLoading ? (
            <p>Loading...</p>
          ): (
          <ul>
            {users.map((user, index) => (
              <UserCard key={index} user={user}/>
            ))}
          </ul>
          )}
        </section>
      <Footer />
      </div>
      )
} 

export default Home