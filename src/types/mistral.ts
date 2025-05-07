interface TextChunk {
    type: 'text';
    text: string;  // Required for text chunks
  }
  
  interface ImageURLChunk {
    type: 'image_url';
    url: string;   // Required for image chunks
  }
  
  type ContentChunk = TextChunk | ImageURLChunk;