import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";
import { useGlobalStyles } from "../Styles/globalStyles";

const path = "resume.pdf";

export const ResumePage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const globalClasses = useGlobalStyles();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    console.log("successfuly loaded");
  }
  return (
    <div className={globalClasses.root}>
      <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
