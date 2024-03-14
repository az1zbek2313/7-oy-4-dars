import Card from "../components/Card"
import d from '../assets/data.json'
import { useState } from "react"

function Home() {
  const [data, setData] = useState(d);

  return (
    <div className={`container-lg d-flex flex-wrap gap-4 justify-content-center mt-4`}>
        {
          data.length > 0 &&
          data.map((el, index) => {
            return (
              <Card key={index} data={el}></Card>
            )
          })
        }
    </div>
  )
}

export default Home