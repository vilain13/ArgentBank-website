
import Hero from '../../components/hero';
import Features from '../../components/features';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signinFormRaz } from '../../store/slices';



function Home() {
  // MAJ du state pour faire un raz du message erreur de connexion login  après un  clic sur logo header ( retour sur connexion n'affiche plus le message erreur login )
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signinFormRaz());
  }, [dispatch]);

  return (
    
      <main>
          <Hero />
          <Features />
      </main>
    
  
  );
}

export default Home;