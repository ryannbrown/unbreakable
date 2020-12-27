// Link Resolver
const linkResolver = (doc) => {
    // Define the url depending on the document type
    if (doc.type === 'page') {
      return '/page/' + doc.uid;
    } else if (doc.type === 'blog_post') {
      return '/blog/' + doc.uid;
    }
  
    // Default to homepage
    return '/';
  }

  export default linkResolver