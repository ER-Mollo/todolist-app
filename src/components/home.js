import React, {useState,useEffect} from "react";
import {db} from '../config/firebase';
import {addDoc, collection,doc, deleteDoc,getDocs,query,where} from 'firebase/firestore';
import '../css/home.css'

function Home({user,logout}){

    const[task, setTask]= useState('');
    const[priority, setPriority] = useState('');

    const[items, setItem] = useState([]);

    const itemRef =collection(db,"Tasks");

    const getItems = async()=>{
        if(user.email !== undefined){
            const q = query(itemRef, where("email","==", user.email))
        let data = await getDocs(q);
        setItem(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        }
    }

   
    const addItems = async()=>{
        if (task !==""){
       await addDoc(itemRef, {task:task, priority:priority, email:user.email}).then(
        promise => {
            alert("Item added");
            getItems();
        }
       ).catch(
        error => {
            alert(error.message)
        }
       )
       
      }
    }
      const deleteTask = async(id)=>{
        let task = doc(itemRef,id);
        await deleteDoc(task).then(
            promise => {
                alert("deleted");
                getItems();
            }
        ).catch()
        getItems();
      }
    


      useEffect(()=>{
        getItems();
     }, [])

    return(
        <div className="home">
            <div className="top">
                <div>
                    <span>{user.displayName}</span>
                    <img src=""/>
                    
                </div>
                <button onClick={logout}>LOGOUT</button>

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
                                        <button onClick={deleteTask}>complete</button>
                                        </div>
                                
                                    ):item.priority == "Medium" ? (
                                        <div className="item" style={{borderBottom: "3px solid orange"}}>
                                        <span>{item.task}</span>
                                        <button onClick={deleteTask}>complete</button>
                                        </div>
                                    ):item.priority == "High" ? (
                                        <div className="item" style={{borderBottom: "3px solid red"}}>
                                        <span>{item.task}</span>
                                        <button onClick={deleteTask}>complete</button>
        
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