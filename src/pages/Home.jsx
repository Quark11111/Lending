import { useState } from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import UserCard from '../components/UserCard'

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
    
      const handleSubscribe = async (e) => {
        if (e) e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/api/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
          })
          const data = await response.json()

          if (response.ok) {
            alert(data.message);
            setSubscribers(data.allSubscribers);
            setEmail('');
          }
        } catch (error) {
          console.error('Error for input', error);
          alert('Server not :(')
        }
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
          <button onClick={(e) => handleSubscribe(e)}>Subscride</button>
          <p>Your input: {email}</p>
          {email.length > 0 && email.length < 5 && <p style={{ color: 'red'}}>Few sumbols</p>}
          <ul>
            {subscribers.map((sub, index) => (
              <li key={sub._id || index}>{email}

              {typeof sub === 'object' ? sub.email : sub}
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