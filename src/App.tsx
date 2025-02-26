import ErrorBoundary from './component/ErrorBoundary'
import FolderData from './component/FolderData'
import { useFolderHook } from './hook/folder-hook'

function App() {
  const { explorerData, updateExplorerData, deleteExplorerData, toggleFolder } = useFolderHook()

  return (
    <ErrorBoundary>
      <div>
        {Object.keys(explorerData)?.length ?
          <FolderData explorerData={explorerData} updateExplorerData={updateExplorerData} deleteExplorerData={deleteExplorerData} toggleFolder={toggleFolder} /> : null
        }
      </div>
    </ErrorBoundary>
  )
}

export default App
