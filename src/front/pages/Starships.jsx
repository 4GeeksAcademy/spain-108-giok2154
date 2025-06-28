import avatar from "../assets/img/avatar.png"
export const Starships = () => {
    return (
        <div className="container mt-4">
            <h2>Stardships</h2>
            <div className="card" style={{ width: '18rem' }}>
               
                    <img src={avatar} className="img-fluid rounded-start" alt="avatar" />
                
                <div className="card-body">
                    <h5 className="card-title">Tatooine</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}