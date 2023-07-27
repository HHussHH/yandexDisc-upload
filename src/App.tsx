import { useState } from "react";

import CustomInput from "./components/custom-input";

import UploadFileList from "./components/upload-file-list";

type file = {
  name: string;
  type: string;
};

function App() {
  const [fileList, setFileList] = useState<file[]>([]);

  return (
    <>
      <CustomInput fileList={fileList} setFileList={setFileList} />
      <UploadFileList fileList={fileList} />
    </>
  );
}

export default App;
