import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHokks = () => {

    const {counter, increment} = useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author, quote} = !!data && data[0];

  console.log(author, quote);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">
          <div className="spinner-border text-primary" role="status" />
          <div>Loading...</div>
        </div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3"> {quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button disabled={loading} className="btn btn-primary" onClick={increment} >Siguiente quote</button>
      
    </div>
  );
};