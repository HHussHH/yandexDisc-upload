import { FC } from "react";
import "./style.scss";
interface File {
  // Определение свойств для типа File
  name: string;
  type: string;
  // и т.д.
}

interface Props {
  file: File;
}
const UploadFileCard: FC<Props> = ({ file }) => {
  return (
    <div className="upload-card">
      <span className="upload-card__name">{file.name}</span>
      <span className="upload-card__file">{file.type}</span>
    </div>
  );
};

export default UploadFileCard;
