import React, { useState, ChangeEvent } from "react";
import { PDFDocument } from "pdf-lib";
import { Document, Page } from "react-pdf"; // Display PDF
import { saveAs } from "file-saver";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

interface SplitOptions {
  splitIntoFiles: boolean;
  pageRange: string;
}

const PdfSplitter: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [splitOptions, setSplitOptions] = useState<SplitOptions>({
    splitIntoFiles: true,
    pageRange: "",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPdfFile(e.target.files[0]);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSplitOptions((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const splitPdf = async () => {
    if (!pdfFile) {
      alert("Please upload a PDF file.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = async () => {
      try {
        const pdfBytes = new Uint8Array(fileReader.result as ArrayBuffer);
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const pagesToSplit = splitOptions.pageRange
          ? splitOptions.pageRange
              .split(",")
              .map((p) => parseInt(p.trim(), 10) - 1)
          : Array.from({ length: pdfDoc.getPageCount() }, (_, i) => i);

        if (splitOptions.splitIntoFiles) {
          for (const pageIndex of pagesToSplit) {
            const newPdf = await PDFDocument.create();
            const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageIndex]);
            newPdf.addPage(copiedPage);

            const newPdfBytes = await newPdf.save();
            const blob = new Blob([newPdfBytes], { type: "application/pdf" });
            saveAs(blob, `page-${pageIndex + 1}.pdf`);
          }
        } else {
          const newPdf = await PDFDocument.create();
          for (const pageIndex of pagesToSplit) {
            const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageIndex]);
            newPdf.addPage(copiedPage);
          }
          const newPdfBytes = await newPdf.save();
          const blob = new Blob([newPdfBytes], { type: "application/pdf" });
          saveAs(blob, `split-pages.pdf`);
        }
        alert("PDF split completed!");
      } catch (error) {
        alert("Error splitting PDF.");
        console.error("Error:", error);
      }
    };

    fileReader.readAsArrayBuffer(pdfFile);
  };

  return (
    <div className="pdf-splitter">
      <h1>PDF Splitter</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      {pdfFile && (
        <div>
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
          <p>Total pages: {numPages}</p>
          <label>
            Page range (comma-separated):{" "}
            <input
              type="text"
              name="pageRange"
              value={splitOptions.pageRange}
              onChange={handleOptionChange}
              placeholder="e.g. 1, 2, 4"
            />
          </label>
          <label>
            Split into separate files:
            <input
              type="checkbox"
              name="splitIntoFiles"
              checked={splitOptions.splitIntoFiles}
              onChange={handleOptionChange}
            />
          </label>
          <button onClick={splitPdf}>Split PDF</button>
        </div>
      )}
    </div>
  );
};

export default PdfSplitter;
