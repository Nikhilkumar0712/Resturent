import React, { useState } from 'react'
import Navbar from './Navbar'
import Products from './Products'


const App = () => {
  const [search, setsearch] = useState('')
  const [data, setdata] = useState([])
  const YOUR_APP_ID = '7b132b38'
  const YOUR_APP_KEY =
    'f4c7d482a28aeb1adad5cb151872d900'
  const submit = (e) => {
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`).then(res => res.json()
    ).then(data => setdata(data.hits))
  }
  return (
    <div className='image'>
      <Navbar />
      <center>

        <form onSubmit={submit}>
          <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} placeholder="search" /> <br />
          <br />
          <input type="submit" className='btn btn-primary' value="search" />
        </form>

        <Products data={data} />
      </center>
    </div>
  )
}

export default App