import { Button } from '@/components/ui/button';
import { useStore } from '@/stores/DBStores';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Home = () => {
  const { faces, votes, deleteAllFromDB } = useStore();
  const [results, setResults] = useState({ positives: 0, negatives: 0 });

  useEffect(() => {
    try{
    const positives = votes.filter((vote) => vote.vote === 'Thumb_Up').length;
    const negatives = votes.filter((vote) => vote.vote === 'Thumb_Down').length;
    setResults({ positives, negatives });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleClearDatabase = () => {
    try {
      deleteAllFromDB();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-center p-4 text-lg">Home</h1>
      <section className="text-center">
        <p>Number of faces in database: {faces.length}</p>
        <p>Number of votes in database: {votes.length}</p>
      </section>
      <section className="p-4">
        <p>Results:</p>

        <div>
          <p>Positives: {results.positives}</p>
          <p>Negatives:  {results.negatives}</p>
        </div>
      </section>
      <section className="p-8 flex justify-around">
        <NavLink to={'/face'}>
          <Button>Start Voting</Button>
        </NavLink>
        <Button onClick={handleClearDatabase}>Clear Database</Button>
      </section>
    </>
  );
};

export default Home;