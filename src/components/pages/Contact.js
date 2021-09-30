const Contact = () => (
  <section>
    <div className="container-fluid">
    <div className="row">
        <h1 className="h3">Visit Us</h1>
      </div>
      <div className="row">
      <iframe title="M2i Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22274.862768726158!2d4.8314158695498355!3d45.74397151271984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea66aaaaaaab%3A0x7ce75b05130ea85d!2sM2i%20Formation!5e0!3m2!1sfr!2sfr!4v1633005820515!5m2!1sfr!2sfr" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className="row">
        <h1 className="h3 mt-2">Contact Us</h1>
      </div>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </section>
)

export default Contact