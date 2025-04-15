import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./DragDropUpload.css";

const DragDropUpload = () => {
  const [files, setFiles] = useState([]);
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    setError(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const handleConversion = async () => {
    if (files.length === 0) {
      setError("Lütfen bir PDF dosyası seçin");
      return;
    }

    setConverting(true);
    setError(null);

    const formData = new FormData();
    formData.append("pdf", files[0]);

    try {
      const response = await fetch("http://localhost:5000/convert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Dönüştürme işlemi başarısız oldu");
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = files[0].name.replace(".pdf", ".xlsx");
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      setFiles([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="upload-section">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <div className="upload-icon">⬆️</div>
        {isDragActive ? (
          <p>Dosyayı buraya bırakın...</p>
        ) : (
          <p>PDF dosyasını sürükleyin veya seçin</p>
        )}
        <p className="sub-text">veya tıklayarak dosya seçin</p>
      </div>

      {files.length > 0 && (
        <div className="file-list">
          {files.map((file) => (
            <div key={file.name} className="file-item">
              <span>{file.name}</span>
              <span className="file-size">
                ({(file.size / 1024).toFixed(2)} KB)
              </span>
            </div>
          ))}
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      <button
        className={`convert-button ${converting ? "converting" : ""}`}
        onClick={handleConversion}
        disabled={converting || files.length === 0}
      >
        {converting ? (
          <>
            <span className="converting-spinner"></span>
            Dönüştürülüyor...
          </>
        ) : (
          "EXCEL'E DÖNÜŞTÜR"
        )}
      </button>
    </div>
  );
};

export default DragDropUpload;
