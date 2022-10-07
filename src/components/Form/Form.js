import React, {useState} from 'react'
import axios from 'axios'

import './Form.css'


function Form() {
  const [cardData, setCardData] = useState({
    title: '',
    skill: '',
    codesnippet: ''
  })

 const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setCardData({
      ...cardData,
      [name]: value
    })
    console.log(cardData)
  }

  const submit = (e) => {
    e.preventDefault();

    const payload = {
      title: cardData.title,
      skill: cardData.skill,
      codesnippet: cardData.codesnippet
    };

    axios({
      url: '/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server')
      resetCardInputs();
    })
    .catch((error) => {
      console.log(error)
    })
  };

  const resetCardInputs = () => {
    setCardData({
      title: '',
      skill: '',
      codesnippet: ''
    })
    window.location.reload()
  }

  return (
    <div className="card p-2 createcard">
<form onSubmit={submit}>
  <div className="mb-3">
  <legend className="text-white">Create New Flashcard</legend>
    <label htmlFor="title" className="form-label text-white">Title</label>
    <input type="text" name="title" className="form-control" onChange={handleChange} id="title" value={cardData.title} aria-describedby="titleHelp" />
    <div id="titleHelp" className="form-text text-white">Describe the new skill that you've learned.</div>
  </div>
  <label htmlFor="skill" className="form-label text-white">Skill</label> 
  <select className="form-select" name="skill" id="skill" onChange={handleChange} value={cardData.skill} aria-label="Default select example">
  <option defaultValue>For which skill?</option>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">Javascript</option>
  <option value="node">Node</option>
  <option value="react">React</option>
  <option value="mongo">MongoDB</option>
  <option value="git">GIT</option>
</select>
  <div className="mb-3">
    <label htmlFor="codesnippet" className="form-label text-white mt-2">Code Snippet</label>
    <textarea className="form-control codesnippets" name="codesnippet" onChange={handleChange} value={cardData.codesnippet} id="codesnippet" rows="5"></textarea>
  </div>
  <button onClick={submit} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form