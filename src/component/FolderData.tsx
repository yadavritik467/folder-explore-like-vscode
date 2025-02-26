import { useState } from "react"
import { FolderData as FolderDataType } from "../data/interface"


const FolderData = ({ explorerData, updateExplorerData, deleteExplorerData, toggleFolder }: FolderDataType) => {
    const [showInput, setShowInput] = useState({
        isVisible: false,
        folderId: '',
        isFolder: false,
    })
    // adding folder or file 
    const handleUpdateExplorer = (e: React.KeyboardEvent<HTMLInputElement>,
        folderId: string,
    ) => {
        if (e.key === "Enter") {

            updateExplorerData(folderId, {
                id: String(Date.now()),
                isFolder: showInput?.isFolder ?? false,
                items: [],
                name: e.currentTarget.value,
                isOpen: true
            })
            setShowInput({
                isVisible: false,
                folderId: '',
                isFolder: false,
            })
        }
    }

    // deleting folder and file
    const handleDeleteExplorer = (
        folderId: string,
    ) => {
        deleteExplorerData(folderId)
    }


    return (
        <div style={{ width: '100%', fontSize: 15, height: 'fit-content', margin: "15px", marginTop: 20, marginBottom: 20 }}>
            <span onClick={() => {
                setShowInput({
                    isVisible: false,
                    folderId: '',
                    isFolder: false,
                }), toggleFolder(explorerData.id)
            }}>
                {explorerData?.isFolder ? '📂' : '📄'} {explorerData.name?.toUpperCase()}
            </span>
            <span>
                {
                    explorerData?.isFolder &&
                    <button onClick={() => { toggleFolder(explorerData.id), setShowInput({ isVisible: !showInput.isVisible, folderId: explorerData.id, isFolder: true }) }} style={{ cursor: 'pointer', paddingTop: '2px', paddingBottom: '2px', paddingLeft: 10, paddingRight: 10, marginLeft: 10, }}>Add Folder  </button>
                }
                {
                    explorerData?.isFolder &&
                    <button onClick={() => { toggleFolder(explorerData.id), setShowInput({ isVisible: !showInput.isVisible, folderId: explorerData.id, isFolder: false }) }} style={{ cursor: 'pointer', paddingTop: '2px', paddingBottom: '2px', paddingLeft: 10, paddingRight: 10, marginLeft: 10, }}>Add File  </button>

                }
                <button onClick={() => handleDeleteExplorer(explorerData.id)} style={{ cursor: 'pointer', paddingTop: '2px', paddingBottom: '2px', paddingLeft: 10, paddingRight: 10, marginLeft: 10, }}> Delete {explorerData.isFolder ? 'Folder' : 'File'} </button>
            </span> <br />
            {
                showInput?.isVisible && showInput.folderId === explorerData.id &&
                <span >
                    <input style={{ marginLeft: 10, marginTop: 10 }} type="text"
                        onKeyDown={(e) => handleUpdateExplorer(e, explorerData.id)}
                    />
                </span>
            }
            {
                explorerData?.isOpen ? explorerData?.items?.map((exp,) => (
                    <div key={exp.id}>
                        <FolderData explorerData={exp} updateExplorerData={updateExplorerData} deleteExplorerData={deleteExplorerData} toggleFolder={toggleFolder} />
                    </div>
                )) : null
            }
            <span>

            </span>
        </div>
    )
}

export default FolderData