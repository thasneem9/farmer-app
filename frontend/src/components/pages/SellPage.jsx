import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom.js';
import { useToast } from '@chakra-ui/react';
const SellPage = () => {
   const toast=useToast()


 
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');


  const user = useRecoilValue(userAtom);
  const owner=user.username

  console.log("++++",user)
  console.log("++++dataname",user.username)

  const postInfo={price,description,name,image,owner}
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async(event) => {
    event.preventDefault()

  
    try {
        console.log(postInfo)
        const res= await fetch('/api/products/uploadProduct',{
          method:'POST',
          headers:{"Content-Type":'application/json'},
          body:JSON.stringify(postInfo)
    
    
        })
        const data = await res.json()
        console.log("data recievd:",data)
        if(data){
          toast({
            title: 'Product Uploaded.',
            description: "Success",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
      
        }
      
    } catch (error) {
      
    }






  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sell Your Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Upload Image:</label>
          <input type="file" onChange={handleImageUpload} style={styles.fileInput}  />
        </div>

        <button type="submit"style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
       marginTop:'100px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    height: '120px',
    boxSizing: 'border-box',
  },
  fileInput: {
    width: '100%',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
};

// Media queries for responsiveness
const mediaQueries = {
  '@media (max-width: 600px)': {
    title: {
      fontSize: '20px',
    },
    form: {
      padding: '10px',
    },
    input: {
      fontSize: '14px',
    },
    textarea: {
      fontSize: '14px',
    },
    button: {
      fontSize: '14px',
    },
 
  },
};

export default SellPage;

