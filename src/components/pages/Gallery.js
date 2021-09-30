import { useEffect, useState } from "react";

const Gallery = () => {
  /* Logic load API */
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);

  const loadGallery = (page) => {
    fetch("https://picsum.photos/v2/list?page=" + page + "&limit=6")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGallery(data);
      })
  }

  const nextPage = (page) => {
    setPage(page);
  }

  useEffect(() => {
    loadGallery(page);
  }, [page])

  const ListImages = () => (
    <div className="row">
      {gallery.map((img) => {
        const url = "https://picsum.photos/id/" + img.id + "/600/400";
        return (
          <div key={img.id} className="col-12 col-md-4 mb-3">
            <a href={img.url} target="_blank" rel="noreferrer">
            <img src={url} className="img-fluid" alt={"from " + img.author} />
            </a>
            <h4 className="text-center">{img.author}</h4>
          </div>
        )
      })
      }
    </div>
  )

  const Pagination = () => (
    <div className="row">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={"page-item " + (page===1?"disabled":null) }>
          <a className="page-link"
          onClick={() => page>1 ? nextPage(page-1) : null} href="#">Previous</a>
        </li>
        <li className="page-item active">
          <a className="page-link"
          onClick={() => nextPage(page)} href="#">{page}</a></li>
        <li className="page-item">
          <a className="page-link"
          onClick={() => nextPage(page+1)} href="#">{page+1}</a></li>
        <li className="page-item">
          <a className="page-link"
          onClick={() => nextPage(page+2)} href="#">{page+2}</a></li>
        <li className="page-item">
          <a className="page-link" 
          onClick={() => nextPage(page+1)} href="#">Next</a>
        </li>
      </ul>
    </nav>
    </div>
  )

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <h1 className="h3">Gallery</h1>
        </div>
        <div className="row">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ...</p>
        </div>
        <Pagination />
        <ListImages />
        <Pagination />
      </div>
    </section>
  )
}

export default Gallery