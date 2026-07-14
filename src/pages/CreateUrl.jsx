import { useState } from "react";
import API from "../services/api";
import "./CreateUrl.css";
import Navbar from "../components/Navbar";
function CreateUrl() {

  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post(
        "/url/shorten",
        {
          originalUrl
        }
      );

      setShortUrl(response.data.shortUrl);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to create URL"
      );

    }
  };

  const copyToClipboard = () => {

    navigator.clipboard.writeText(shortUrl);

    alert("URL Copied Successfully");

  };

  return (
  <>
    <Navbar />

    <div className="create-container">

      <div className="create-card">

        <h1>Create Short URL</h1>

        <p>
          Enter your long URL and generate a
          shortened version instantly.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Paste your URL here..."
            value={originalUrl}
            onChange={(e) =>
              setOriginalUrl(e.target.value)
            }
            required
          />

          <button type="submit">
            Generate URL
          </button>

        </form>

        {shortUrl && (

          <div className="result-box">

            <h3>Generated URL</h3>

            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
            >
              {shortUrl}
            </a>

            <button
              className="copy-btn"
              onClick={copyToClipboard}
            >
              Copy URL
            </button>

          </div>

        )}

      </div>

        </div>
  </>
);
}

export default CreateUrl;