import avatar from "../assets/img/avatar.png"

export const Planets = () => {
    return (
        <div class="container bg-dark mb-3">
            <h2>Planets</h2>
           
            <div className="card row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2">
               
                    <img src={avatar} className="img-fluid rounded-start" alt="avatar" />
                
                <div className="card-body">
                    <h5 className="card-title">Tatooine</h5>
                    <span href="#" class="btn btn-primary">Details</span>
                    <span href="#" class="btn btn-primary"><i class="fa-regular fa-heart"></i></span>
                </div>
            </div>
        </div>
    )
}

