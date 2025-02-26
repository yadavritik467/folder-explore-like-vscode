export interface Explorer {
  id: string;
  name: string;
  isFolder: boolean;
  items: Explorer[];
  isOpen: boolean;
}

export interface FolderData {
  explorerData: Explorer;
  updateExplorerData: (explorerId: string, newExplorer: Explorer) => void;
  deleteExplorerData: (explorerId: string) => void;
  toggleFolder: (explorerId: string) => void;
}
