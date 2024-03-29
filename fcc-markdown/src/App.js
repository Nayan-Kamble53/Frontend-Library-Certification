import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # This is heading 1 (H1)
  ## This is heading 1 (H2)

  [title](https://www.example.com)

  \`code\`

  \`\`\`
  {
    "firstName": "Virat",
    "lastName": "Kohli",
    "age": 36
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![image](image.png)

  **bold text**
  `);

  marked.setOptions({
    breaks: true
  })


  return (
    <div className="App">
      <textarea id='editor' onChange={(e) => {
        setText(e.target.value);
      }}
      value={text}
      ></textarea>

      <div id='preview' 
      dangerouslySetInnerHTML={{
      __html: marked(text),
      }}>        
      </div>
    </div>
  );
}

export default App;
