import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const addPost = () => {
    if (text.trim() === "") return;
    setPosts([{ id: Date.now(), content: text }, ...posts]);
    setText("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🖤 INGRILY</h1>

      <div style={styles.postBox}>
        <textarea
          placeholder="Write something aesthetic..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
        />
        <button onClick={addPost} style={styles.button}>
          Post
        </button>
      </div>

      <div>
        {posts.map((post) => (
          <div key={post.id} style={styles.card}>
            {post.content}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "white",
    padding: "30px",
    fontFamily: "Arial"
  },
  title: {
    textAlign: "center",
    fontSize: "40px"
  },
  postBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px"
  },
  textarea: {
    width: "300px",
    height: "80px",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    marginBottom: "10px"
  },
  button: {
    padding: "10px 20px",
    background: "black",
    color: "white",
    border: "1px solid white",
    borderRadius: "20px",
    cursor: "pointer"
  },
  card: {
    background: "#1a1a1a",
    padding: "15px",
    margin: "10px auto",
    width: "300px",
    borderRadius: "15px"
  }
};

export default App;
