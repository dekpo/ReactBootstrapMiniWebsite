import { useEffect,useState } from "react";

const Gallery = () => {
  /* Logic load API */
  const [gallery,setGallery] = useState([]);

  const loadGallery = () => {
    fetch("https://picsum.photos/v2/list?page=3&limit=9")
    .then( response => response.json() )
    .then( data => {
      console.log(data);
      setGallery(data);
    })
  }

  useEffect(()=>{
    loadGallery();
  },[])

  const ListImages = () => (
    <div className="row">
    { gallery.map( (img) => {
      const url = "https://picsum.photos/id/" + img.id + "/600/400";
      return(
        <div key={img.id} className="col-12 col-md-4 mb-3">
              <img src={ url } className="img-fluid" alt={ "from " + img.author } />
              <h4 className="text-center">{ img.author }</h4>
            </div>
      )
    })
  }
  </div>
  )

  return(
    <section>
        <div className="container-fluid">
          <div className="row">
            <h1 className="h3">Gallery</h1>
          </div>
          <div className="row">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ...</p>
          </div>
          

            <ListImages />
            
          
        </div>
      </section>
)}

export default Gallery