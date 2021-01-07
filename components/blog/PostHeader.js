const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const PostHeader = ({ meta, isBlogPost }) => {
  let date = new Date(meta.date);
  return (
    <div>
      <h1 className={isBlogPost ? 'blog-title': 'regular-title'} >{meta.title}</h1>
      <div className='details'>
        {isBlogPost ? null : <p>{meta.description}</p>}  
        <span>{monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</span>
        <span role='img' aria-label='one coffee'>☕ {meta.readTime + ' min read'}</span>
      </div>
      <style jsx>
        {`
          .blog-title {
            font-size: 2.25rem;
            font-weight: 700;
            color: #b19cd9;
          }
          .regular-title {
            font-size: 1.9rem;
            font-weight: 700;
            color: #b19cd9;
          }
          .details span {
            color: #bdbdbd;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
}
  