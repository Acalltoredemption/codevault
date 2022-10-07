import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Flashcards() {
  const [cardData, setCardData] = useState([]);

  function fetchCards(){
    const url = `http://localhost:8080/api`
    setCardData([])

    fetch(url)
    .then((response) => response.json())
    .then((carddata) => setCardData(carddata, ...cardData))
  }



  useEffect(() => {
    fetchCards();
  }, [])


const deleteCard = (cardId) => {

    axios({
      url: '/api/' + cardId,
      method: 'DELETE',
    })
    .then(() => {
      console.log('Card Deleted from server')
    })
    .catch((error) => {
      console.log(error)
    })

    setTimeout(() => {
      fetchCards()
    }, 300)
  };


  return (
    <div className="container">
      <div className="row">
      {cardData && cardData.map(card =>  {
        if(card.skill === 'javascript'){
          var color = 'card mb-3 bg-primary'
        } if(card.skill === 'css'){
           color = 'card mb-3 bg-warning'
        } if(card.skill === 'node'){
           color = 'card mb-3 bg-success'
        } if(card.skill === 'mongo'){
           color = 'card mb-3 bg-info'
        } if(card.skill === 'html'){
          color = 'card mb-3 bg-secondary'
        } if(card.skill === 'git'){
          color = 'card mb-3 bg-dark'
        } if (card.skill === 'react'){
          color = 'card mb-3 bg-danger'
        }
    return    <div key={Math.random()} className="col-sm-12 col-md-6">
          <div className={color} style={{boxShadow: '10px 5px 5px'}}>
         <div className="card-body">
          <h5 className="card-title text-white">{card.title}</h5>
          <hr />
           <h6 className="card-subtitle mb-2 mt-1 text-white" style={{textAlign: 'center'}}>{card.skill.toUpperCase()}</h6>
           <hr />
           <p className="card-text text-white" style={{whiteSpace: 'pre-wrap'}}>{card.codesnippet}</p>

                        <button onClick={() => deleteCard(card._id)} class="btn btn-danger">Delete</button>

        </div>
</div>
        </div>
 } )}
      </div>
    </div>
  )
}

export default Flashcards