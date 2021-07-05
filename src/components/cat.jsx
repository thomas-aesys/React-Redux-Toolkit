import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCat } from '../reducers/catReducer';

const Cat = () => {
    const catSelector = state => state.cat
    const cat = useSelector(catSelector)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Cat</h1>
            <button onClick={() => dispatch(fetchCat())}>Show Cat</button>

            {
                cat.loading ?
                    <p>{cat.loading}</p>
                    :
                    cat.cat.map(elem => {
                        return (
                            <div>
                                <img src={elem} width="200px" height="200px"></img>
                            </div>
                        )
                    })

            }

        </div>
    )
}
export default Cat;