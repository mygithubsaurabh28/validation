import React,{useState} from 'react';
import './Product.css'

function Product() {
    const [selects,setSelects]=useState();
    const [userName,setUserName]=useState('');
    const [comments,setComments]=useState('');
    const [validName,setValidName]=useState(false);
    const [data,setData]=useState([]);

    function commentData(e){
        setComments(e.target.value)
    }

    function formHandler(event){
        event.preventDefault();
        const obj1={
            Name:userName,
            Rating:selects,
            Feedback:comments
        }
        setData([...data,obj1]);

        alert(`Name-${userName}, Rating:${selects}, Feedback-${comments}`);
    }



    function nameText(e){
        setUserName(e.target.value)
        if(userName.trim().length>0 && userName.trim().length<14){
            setValidName(true)
        }
        else{
            setValidName(false)
        }

       
       
    }

    const nameInputClasses=!validName ? "error-text" : ""
  return (
    <div>

        <h1>Apple Watch</h1>
        <img id="applewatch" src='./images/watch.jpg' alt=""></img>
 
         <div className='select'>
         
        <label>Rating</label><br/>
        <select value={selects} onChange={e=>setSelects(e.target.value)}>
            <option>Rating</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
        <div className='inputbox'>
        <label>Your Name</label><br/>
        <input type='text' placeholder='Your Name' onChange={nameText}></input>
        </div>
        {!validName &&<p className={nameInputClasses}>Name Must be greater than 2 characters</p>}
        <div className='textarea'>
            <label>Comment</label><br/>
            <textarea onChange={commentData}/>
        </div>
        <button type='submit' onClick={formHandler}>Submit</button>
        </div>

       <div>
        {
        data.map((ele)=>{
        return (
        <div>
        <p>{ele.Name}</p>
        <p>{ele.Rating}</p>
        <p>{ele.Feedback}</p>
        </div>
        )
        
    })
}
    </div>

        
        
        
        
      
    </div>
  )
}

export default Product
