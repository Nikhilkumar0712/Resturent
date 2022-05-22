import React from 'react'

const Products = ({ data }) => {
    return (
        <div>

            <div className='row'>
                {data.map(data =>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={data.recipe.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">{data.recipe.label}</h5>
                                <p className="card-text">Total amount of calories: {Math.round(data.recipe.calories)}</p>
                                <a href="#/" className="btn btn-primary">BUY</a>
                            </center>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products