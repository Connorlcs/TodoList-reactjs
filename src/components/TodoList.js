import React from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
    let { inputValue, list, handleClick, handleChange, handleDelete} = props

return (
    <div>
        <div>
            <form style={{marginTop: 20, marginLeft: 20}}>
                <div className="form-group row" style={{marginTop: 50}}>
                    <label  className="col-sm-1 col-form-label">Description</label>
                    <div className="col-sm-3" style={{width: 300, marginLeft: 20}}>
                        <input onChange={handleChange} type="description" className="form-control" id="colFormLabel" placeholder='description..' />
                    </div>
                </div>
                <div className="form-group row" style={{marginTop: 20}}>
                <label className="col-sm-1 col-form-label">Categories</label>
                    <div style={{width: 300, marginLeft: 20}}>
                        <select onChange={handleChange} className="form-select" aria-label="Default select example">
                            <option value="html">html</option>
                            <option value="css">css</option>
                            <option value="js">js</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row" style={{marginTop: 20}}>
                <label className="col-sm-1 col-form-label">Contents</label>
                    <div className="form-group" style={{width: 400, marginLeft: 20}}>
                        <textarea onChange={handleChange} placeholder='contents..' className="form-control" rows="3"></textarea>
                    </div>
                </div>
            </form>
            <div style={{marginTop: 50, marginLeft: 20}}>
                <button onClick={handleClick} className="btn btn-primary" type="submit">Submit</button>
            </div>
        </div>
        <table id="tableInput" className="table table-hover table-bordered" style={{width: 600, marginLeft: 650, marginTop: -250}}>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" name="tableHead" lay-skin="primary" lay-filter="allChoose" />
                    </th>
                    <th>Description</th>
                    <th>Operate</th>
                    {/* <th>Categories</th>
                    <th>Contents</th> 
                    <th>Operate</th> */}
                </tr>
            </thead>
            <tbody>
                {list.map((item,index) => {
                    return (
                        <tr key={index}>
                            <th>
                                <input type="checkbox" name="tableHead" lay-skin="primary" lay-filter="allChoose" />
                            </th>
                            <td>{item}</td>
                            {/* <td>{item.description}</td>
                            <td>{item.categories}</td>
                            <td>{item.content}</td> */}
                            <button onClick={handleDelete} type="button" class="btn btn-link">Delete</button>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    </div>
)}

const dispatchToProps = (dispatch) => {
    return {
        handleChange(e) {
            const action = {
                type: 'HANDLE_CHANGE',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'ADD_ITEM',
            }
            dispatch(action)
        },
        handleDelete(index) {
            const action = {
                type: 'DELETE_ITEM',
                index
            }
            dispatch(action)
        }
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);