import { useEffect } from "react"
import { AppContext } from "../App"
import { useContext } from "react"
const LatestImage = () => {
  
  const {latestPost, setLatestPost} = useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:3000/latest")
    .then((response) => response.json())
    .then((data) => {
        setLatestPost(data.image_url)
        console.log(latestPost)
      })
    .catch((error) => console.error(error))
  }, [latestPost]);



  return(
  <>
    <h1>LatestImage</h1>
    <img src={latestPost} alt="latest post" className="latest-image"></img>
  </>
  )

}

export default LatestImage
