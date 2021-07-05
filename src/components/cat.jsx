import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_CAT } from '../slices/catReducer';
import './cat.css'

const Cat = () => {
    const catSelector = state => state.cat
    const cat = useSelector(catSelector)
    const dispatch = useDispatch()

    return (
        <div className="container_cat">
            <h1>cat image</h1>
            <button className="button_cat" onClick={() => dispatch(GET_CAT())}>Show Cat</button>
            <div className="show">
                {
                    cat.loading ?
                        <p>{cat.loading}</p>
                        :
                        cat.cat.map((elem, index) => {
                            return (
                                <div className="img" key={index}>
                                    <img src={elem} width="200px" height="200px"></img>
                                </div>
                            )
                        })

                }
            </div>
        </div>
    )
}
export default Cat;