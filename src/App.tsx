import ErrorBoundary from './component/ErrorBoundary'
import FolderData from './component/FolderData'
import { useFolderHook } from './hook/folder-hook'

function App() {
  const { explorerData, updateExplorerData, deleteExplorerData, toggleFolder } = useFolderHook()

  const exportToLocal = async () => {
    try {
      const response = await fetch("http://localhost:5000/export-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(explorerData),
      });
  
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ErrorBoundary>
      <div>
        {Object.keys(explorerData)?.length ? <div style={{display:'flex',margin:5}}>
          <FolderData explorerData={explorerData} updateExplorerData={updateExplorerData} deleteExplorerData={deleteExplorerData} toggleFolder={toggleFolder} />
          <button onClick={exportToLocal} style={{ marginTop: 10, padding: 5 }}>
            Export Folder to Local Disk
          </button>

        </div>
          : null
        }
      </div>
    </ErrorBoundary>
  )
}

export default App
