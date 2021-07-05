import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_CAT } from '../slices/catReducer';

const Cat = () => {
    const catSelector = state => state.cat
    const cat = useSelector(catSelector)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Cat</h1>
            <button onClick={() => dispatch(GET_CAT())}>Show Cat</button>
            {
                cat.loading ?
                    <p>{cat.loading}</p>
                    :
                    cat.cat.map((elem,index)=> {
                        return (
                            <div key={index}>
                                <img src={elem} width="200px" height="200px"></img>
                            </div>
                        )
                    })

            }

        </div>
    )
}
export default Cat;