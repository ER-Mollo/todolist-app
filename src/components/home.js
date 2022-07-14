import React, {useState,useEffect} from "react";
import {db} from '../config/firebase';
import {addDoc, collection,doc, deleteDoc,getDocs} from 'firebase/firestore';
import '../css/home.css'

function Home(){
    const[task, setTask]= useState('');
    const[priority, setPriority] = useState('');

    const[items, setItem] = useState([]);

    const itemRef =collection(db,"Tasks");

    const getItems = async()=>{
        let data = await getDocs(itemRef);
        setItem(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }

    const addItems = async()=>{
       await addDoc(itemRef, {task:task, priority:priority})
       alert("Item added");
      getItems();
      }
      const deleteItem = async(id)=>{
        console.log("starting delete")
        console.log(id)
        console.log(itemRef)
        const myItem = doc(itemRef,id);
        console.log("item selected to doc")
        console.log(myItem)
        await deleteDoc(myItem)
        /* .then( (results) => {
            ///if good
            getItems();
        })
        .catch(err => {
            alert(err.message)
        }) */
        
      }

      useEffect(()=>{
        getItems();
     }, [])

    return(
        <div className="home">
            <div className="top">
                <div>
                    <span>Refilwe</span>
                    <img src=""/>
                    
                </div>
                <button>LOGOUT</button>

            </div>
            <div className="bottom">
                <div className="input">
                    <div className="add">
                     <input placeholder="Add new Task" onChange={(e)=>setTask(e.target.value)}/>
                    </div>
                    <div className="select">
                        <select onChange={(e)=>setPriority(e.target.value)}>
                            <option value="select" >priority</option>
                            <option value="Low" >Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <button onClick={addItems}>+</button>

                </div>
                
                <div className="tasks">
                    {
                        items.map(item=>((
                            <div className="items" key={item.id}>
                                {
                                    item.priority == "Low" ? (
                                        
                                        <div className="item" style={{borderBottom: "3px solid green"}}>
                                        <span>{item.task}</span>
                                        <button onClick={deleteItem}>complete</button>
                                        </div>
                                
                                    ):item.priority == "Medium" ? (
                                        <div className="item" style={{borderBottom: "3px solid orange"}}>
                                        <span>{item.task}</span>
                                        <button onClick={deleteItem}>complete</button>
                                        </div>
                                    ):item.priority == "High" ? (
                                        <div className="item" style={{borderBottom: "3px solid red"}}>
                                        <span>{item.task}</span>
                                        <button onClick={() => deleteItem(item.id)}>complete</button>
        
                                        </div>
                                    ):(
                                        <div>

                                        </div>
                                    )
                                }



                                
                            </div> 
                        )))
                    }

                    

                </div>
            </div>
        </div>
    )
}

export default Home;