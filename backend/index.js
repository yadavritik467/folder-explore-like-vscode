import express from "express";
import cors from "cors";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIRECTORY = path.join(__dirname, "exported_folder");

// Function to create folder structure
const createFolderStructure = (dirPath, data) => {
  if (data.isFolder) {
    fs.ensureDirSync(dirPath); 
    data.items.forEach((item) => {
      createFolderStructure(path.join(dirPath, item.name), item);
    });
  } else {
    fs.writeFileSync(dirPath, data.content || "");
  }
};

// API to export explorer data as local files
app.post("/export-folder", (req, res) => {
  const explorerData = req.body;

  if (!explorerData) {
    return res.status(400).json({ message: "No data provided" });
  }

  fs.removeSync(BASE_DIRECTORY);
  fs.ensureDirSync(BASE_DIRECTORY);

  createFolderStructure(BASE_DIRECTORY, explorerData);

  res.json({ message: "Folder exported successfully!", path: BASE_DIRECTORY });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
