import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'

const Drugs = () => {
  const [drugs, setDrugs] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchDrugs = async () => {
      const { data, error } = await supabase
        .from('Drugs')
        .select('*');
        
      if (error) {
        setFetchError('Could not fetch drugs');
        setDrugs([]);
      } else {
        setDrugs(data);
        setFetchError(null);
      }
    };

    fetchDrugs();

  }, []);  

  return (
    <div className="w-full h-full flex items-center justify-center">
      {fetchError && <p className="text-red-500">{fetchError}</p>}
      {drugs && <div className="w-3/4 h-auto flex flex-col justify-evenly p-10">
        <div className="w-full h-auto flex flex-wrap justify-between items-center p-4 text-lg font-bold">
          <h1>NAME</h1>
          <h1>WEIGHT</h1>
          <h1>PRICE</h1>
        </div>
        {drugs.map((drug, index) => (
          <div key={index} className="w-full h-auto flex flex-wrap justify-between items-center p-4">
            <h1>{drug.name}</h1>
            <h1>{drug.weight}</h1>
            <h1>{drug.price}</h1>
          </div>
        ))}  
      </div>
      }    
    </div>
  )
}

export default Drugs
