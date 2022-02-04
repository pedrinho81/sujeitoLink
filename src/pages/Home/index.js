import {FiLink} from "react-icons/fi"
import "./home.css"
import {useState} from "react"
import LinkItem from "../../components/LinkItem"
import { saveLink } from "../../services/storeLinks"

import Menu from "../../components/Menu"

import api from"../../services/api"

export default function Home() {
  const [link, setLink] = useState("")
  //CONTROLAR MODAL
  const [showModal, setShowModal] = useState(false)

  const [data, setData] = useState({})

  async function shortLink() {

    try {
      const response = await api.post("/shorten", {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink("@encurtaLink", response.data)  

      setLink("")
    } catch{
      alert("Ops, parece que algo deu errado!")
      setLink("")
    }

    setShowModal(true)
  }
  
    return <div className="container-home">
            

      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo" />
        <h1>Sujeito Link</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#FFF" onClick={shortLink}/>
            <input 
            placeholder="Cole seu link aqui..." 
            value={link}  
            onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <button onClick={shortLink}>Gerar Link</button>
        </div>
        <Menu/>

        {showModal && (
          <LinkItem
          closeModal={ () => setShowModal(false) }
          content={data}
          />
          
        )}
    </div>
  }