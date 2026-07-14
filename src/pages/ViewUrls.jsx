import { useEffect, useState } from "react";
import API from "../services/api";
import "./ViewUrls.css";
import Navbar from "../components/Navbar";
function ViewUrls() {

  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {

      const response = await API.get("/url/all");

      setUrls(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const copyUrl = (url) => {

    navigator.clipboard.writeText(url);

    alert("URL Copied");

  };

  return (
  <>
    <Navbar />

    <div className="urls-container">

      <h1>My Shortened URLs</h1>

      <div className="urls-grid">

        {urls.map((url) => {

          const shortLink =
            `https://urlshortener-backend-op87.onrender.com/${url.shortCode}`;

          return (

            <div
              key={url._id}
              className="url-card"
            >

              <h3>Original URL</h3>

              <p className="original-url">
                {url.originalUrl}
              </p>

              <h3>Short URL</h3>

              <a
                href={shortLink}
                target="_blank"
                rel="noreferrer"
              >
                {shortLink}
              </a>

              <div className="url-footer">

                <span>
                  👆 Clicks: {url.clicks}
                </span>

                <button
                  onClick={() =>
                    copyUrl(shortLink)
                  }
                >
                  Copy
                </button>

              </div>

            </div>

          );

        })}

      </div>

        </div>
  </>
);
}

export default ViewUrls;