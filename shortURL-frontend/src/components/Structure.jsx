import { useState } from "react"
import axios from "axios"
export function Structure(){
    const [url, setUrl] = useState('')
    const [shortUrlID, setShortURL] = useState('')

    async function  handleClick() {
        
        try{

            // axios code 
            // let res = await axios.post(`http://localhost:3000/urlShortner/shortUrl`,  url   )
            
            //fetch code
            let res = await fetch(`http://localhost:3000/urlShortner/shortUrl`, {
                method : 'POST',
                body : JSON.stringify({
                    url : url
                }),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            
        }catch(e){
            console.error("error occured while fetching url",e);

        }
        
       
    } 

    return (
        <>
            <input type="text" placeholder="Enter URL " onChange={(e) => setUrl(e.target.value)} /> <br /><br />
            <button onClick={handleClick}> Get Shortened URL </button> <br /><br />
            {/* <div>
                {url}
            </div> */}
            
        </>
    )
}