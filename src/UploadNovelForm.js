// import React, { useState } from 'react';

// const UploadNovelForm = ({ addNovel }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [genre, setGenre] = useState('');
//   const [summary, setSummary] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addNovel({ title, author, genre, summary, imageUrl });
//     setTitle('');
//     setAuthor('');
//     setGenre('');
//     setSummary('');
//     setImageUrl('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
//       <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
//       <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
//       <textarea value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Summary" />
//       <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
//       <button type="submit">Upload Novel</button>
//     </form>
//   );
// };

// export default UploadNovelForm;



import React, { useState } from 'react';

const UploadNovelForm = ({ addNovel }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [summary, setSummary] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new novel object
    const newNovel = { title, author, genre, summary, imageUrl };
    // Add the novel to the list
    addNovel(newNovel);
    // Clear the form fields
    setTitle('');
    setAuthor('');
    setGenre('');
    setSummary('');
    setImageUrl('');
  };

  return (
    <form className='container-form' onSubmit={handleSubmit}>
      <input  className='input-field' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input className='input-field' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <input className='input-field' value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
      <textarea className='input-field' value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Summary" />
      <input className='input-field' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <button className='input-field  btn' type="submit">Upload Novel</button>
    </form>
  );
};

export default UploadNovelForm;
