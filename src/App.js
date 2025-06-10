import React, { useRef, useEffect } from "react";
import "./index.css";
import CloudPdfViewer from "@cloudpdf/viewer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: process.env.REACT_APP_CLOUDPDF_DOCUMENTID,
        darkMode: false
      },
      viewer.current
    ).then((instance) => {});
  }, []);
  return (
    <div className="app">
      <div className="viewer" ref={viewer}></div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}