import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [nameShow, setnameShow] = useState([])
    const [statusShow, setstatusShow] = useState([])

    const handleClick = (val) => {
        setShow(val);
    }
    const submitbtn = (event) => {
        event.preventDefault()
        const from = event.target
        const name = from.name.value;
        const status = from.status.value;
        console.log(name, status);

        setnameShow([...nameShow, name])
        setstatusShow([...statusShow, status])
    }
    console.log(nameShow);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={submitbtn} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input name='status' type="text" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <th scope="col">
                            {
                                nameShow.map((namesingle,index)=><li key={index}>{namesingle}</li>)
                            }
                            </th>
                            <th scope="col">
                            {
                                statusShow.map((namesingle,index)=><li key={index}>{namesingle}</li>)
                            }
                                </th>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;