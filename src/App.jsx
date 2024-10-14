import { useEffect, useState } from "react";
import './App.css'

function App() {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const result = await res.json()

    console.log(result)
    setData(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>My Products____</h1>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {
          data.map((item) => (
            <div key={item.id} className="card">
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default App;


