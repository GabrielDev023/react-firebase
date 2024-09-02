import React, { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `uploads/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setUrl(downloadURL);
        alert('Upload realizado com sucesso!');
      } catch (error) {
        alert('Erro ao fazer upload: ' + error.message);
      }
    } else {
      alert('Por favor, selecione um arquivo primeiro.');
    }
  };

  return (
    <div>
      <h2>Upload de Arquivo</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {url && <p>Arquivo disponível em: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>}
    </div>
  );
}

export default FileUpload;
