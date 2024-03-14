import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function getItem() {
  let data = [];
  if (localStorage.getItem('star')) {
    data = JSON.parse(localStorage.getItem('star'))
  }
  return data;
}

function Card(props) {
  const [checked, setChecked] = useState(false)
  const {data} = props
  const counter = useSelector(state => state.count.counter)
  const dispatch = useDispatch();
  let stars = getItem();

  useEffect(() => {
    if (stars.some(el => el.id == data.id)) {
      setChecked(true)
    }
    dispatch({type:"GET", payload:stars.length})

  }, [])

  function bookmarkSave() {
    if (checked) {
      setChecked(false)
      dispatch({type:"DELETE"})
      stars = stars.filter(el => el.id != data.id)
      localStorage.setItem('star', JSON.stringify(stars))
    } else {
      setChecked(true)
      dispatch({type:"ADD"})
      stars.push(data);
      localStorage.setItem('star', JSON.stringify(stars))
    }
  }
  return (
    <div className="card" style={{width: '20rem', height: '32rem'}}>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title text-center">{data.attributes.title}</h5>
          <i style={{cursor: 'pointer', color: '#FFD700'}} onClick={bookmarkSave} className={`fa-star ${checked?'fa-solid':'fa-regular'}`}></i>
        </div>
        <img src={data.attributes.image} style={{objectFit:'cover'}} alt="image" width={"100%"} height={'160rem'}/>
        <p className="card-text" style={{textAlign: 'justify'}}>{data.attributes.description}</p>
        <a href="#" className="btn btn-primary w-100">{data.attributes.company}</a>
      </div>
    </div>
  )
}

export default Card