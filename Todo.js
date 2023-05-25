import React, { useState } from 'react'
import '../App.css';


export default function Todo() {

    const [data, setData] = useState(" ");
    const [listData, setlistData] = useState([]);

    const addActivity = () => {

        // setlistData(...listData, data);
        // console.log(listData);

        setlistData((listData) => {
            const upadtedList = [...listData, data]
            console.log(upadtedList);
            return upadtedList
        })


        setData(" ")
    }
    const handleDelete = (index) => {
        const deletedList = [...listData]
        deletedList.splice(index,1);
        setlistData(deletedList);
    }

    return (
        <div className='main-div'>

            <div className='child-div'>
                <figure>
                    <img src='./images/Untitled.png' alt="" width='70px' height='70px' style={{ position: "relative", left: "600px", top: "100px" }} />
                    <figcaption className='spans'>Add your list here</figcaption>
                </figure>
                <div className='addItem'>
                    <input type="text" placeholder='Add item...' onChange={(e) => setData(e.target.value)} value={data} />
                    <button className='AddBtn' onClick={addActivity}>Add</button>

                </div>

                <div className='showItems'>
                    {listData !== [] && listData.map((info, index) => {
                        return (
                            <>
                                <p key={index}>

                                    <div className='listinfo'>{info}</div>
                                    <button className='deletebtn' onClick={() => handleDelete(index)}>delete</button>
                                </p>
                            </>
                        )
                    })}





                </div>
            </div>

        </div>
    )
}
