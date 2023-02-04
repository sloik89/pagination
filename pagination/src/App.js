import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

import Fallower from "./Fallower";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [fallowers, setFallowers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFallowers(data[page]);
  }, [loading, page]);
  const handleIndex = (index) => {
    setPage(index);
    console.log(index);
  };
  const handlePrev = () => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  console.log(data);
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {fallowers.map((fallower) => {
            return <Fallower key={fallower.id} {...fallower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button onClick={handlePrev} className="btn prev">
              prev
            </button>
            {data.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => handleIndex(idx)}
                  className={`btn ${idx === page && "active-btn"}`}
                >
                  {idx + 1}
                </button>
              );
            })}
            <button onClick={handleNext} className="btn next">
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
