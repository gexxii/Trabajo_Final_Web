import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

const CrearPost = ({isAuth}) => {

const [title, setTitle] = useState('');
const [postTitle, setPostTitle] = useState('');

let navigate = useNavigate();

const postsCollectionRef = collection(db, 'posts');

const createPost = async() => {
  if (title === '' || postTitle === '') {
    alert('Completa el campo'); 
  } else {
    try{
      await addDoc(postsCollectionRef, {
        title,
        postTitle,
        author: {
          name:auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      })
      console.log(auth);
      navigate('/');
    } catch(error) {
        console.log(error);
    }
  }
}

useEffect(() => {
  if(!isAuth){
    navigate('/login');
  }
})

  return (
    <div className='container'>
      <div className='bg-light p-5 rounded mt-3'>
        <h1>Crea un Post</h1>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>Titulo</label>
          <input type='text' placeholder='Escribe un titulo' className='form-control' onChange={(a) => setTitle(a.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='posts' className='form-label'>Post</label>
          <textarea placeholder='Escribe un post' className='form-control' onChange={(a) => setPostTitle(a.target.value)}></textarea>
        </div>
        <button className='btn btn-dark' onClick={createPost}>Publicar Post</button>
      </div>
    </div>
  )
}

export default CrearPost
