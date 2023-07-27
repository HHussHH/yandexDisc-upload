import { FC } from "react";
import UploadFileCard from "../uploda-file-card";
import "./style.scss";
interface File {
  // Определение свойств для типа File
  name: string;
  type: string;
  // и т.д.
}

interface Props {
  fileList: File[];
}
const UploadFileList: FC<Props> = ({ fileList }) => {
  return (
    <div className="upload-list">
      {fileList.map((item) => {
        return <UploadFileCard key={item.name} file={item} />;
      })}
    </div>
  );
};

export default UploadFileList;
