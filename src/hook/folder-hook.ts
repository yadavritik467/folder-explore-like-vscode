import { useState } from "react";
import { Explorer, FolderData } from "../data/interface";
import explorer from "../data/data";

export function useFolderHook(): FolderData {
  const [explorerData, setExplorerData] = useState<Explorer>(explorer);

  function toggleFolder(explorerId: string) {
    function traverseExplorer(node: Explorer): Explorer {
      if (node.id === explorerId) {
        return { ...node, isOpen: !node.isOpen };
      }

      if (node?.items?.length) {
        const updatedItems = node.items.map(traverseExplorer);

        if (updatedItems !== node.items) {
          return { ...node, items: updatedItems };
        }
      }

      return node;
    }

    const newExplorerData = traverseExplorer(explorerData);
    setExplorerData(newExplorerData);
  }

  function updateExplorerData(explorerId: string, newExplorer: Explorer) {
    function traverseExplorer(node: Explorer): Explorer {
      if (node.id === explorerId) {
        return { ...node, items: [...node.items, newExplorer] };
      }
      if (node?.items?.length) {
        const updatedItems = node.items.map(traverseExplorer);

        if (updatedItems !== node.items) {
          return { ...node, items: updatedItems };
        }
      }

      return node;
    }

    const newExplorerData = traverseExplorer(explorerData);

    setExplorerData(newExplorerData as Explorer);
  }
  function deleteExplorerData(explorerId: string) {
    function traverseExplorer(node: Explorer) {
      if (node.id === explorerId) {
        return {};
      }
      if (node?.items?.length) {
        const updatedItems = node.items.filter((no) =>
          no.id === explorerId ? no.id !== explorerId : traverseExplorer
        );
        return { ...node, items: updatedItems };
      }

      return node;
    }

    const newExplorerData = traverseExplorer(explorerData);
    setExplorerData(newExplorerData as Explorer);
  }

  return {
    explorerData,
    updateExplorerData,
    deleteExplorerData,
    toggleFolder,
  };
}
