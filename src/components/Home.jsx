import { useState, useEffect } from 'react';
import Header from './Header';
import Profile from './Profile';
import Projects from './Projects';
import Footer from './Footer';

function Home(){

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {

        async function fetchProjects(){
            try {
                const response = await fetch('../src/db.json');
                const data = await response.json();
                setResults(data);
            }
            catch (error) {
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        }

        fetchProjects();

    }, []);

    return (

        <>

        <Header />

        <main>

            <Profile />

            <Projects results={results} loading={loading} />

        </main>

        <Footer />

        </>

    )
}

export default Home