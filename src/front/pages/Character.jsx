import avatar from "../assets/img/avatar.png"

export const Character = () => {
    return (
        <div className="container mt-4">
            <h1>character</h1>
            <div className="card" style={{ width: '18rem' }}>

                <img src={avatar} className="img-fluid rounded-start" alt="avatar" />

                <div className="card-body">
                    <h5 className="card-title">Tatooine</h5>
                    <span href="#" class="btn btn-primary">Go somewhere</span>

                </div>
            </div>
        </div>
    )
}