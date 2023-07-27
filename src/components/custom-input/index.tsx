import React, { FC, MutableRefObject, useRef } from "react";
import "./style.scss";
import { fileInputChange } from "./file-selected";
import UplodaFileButton from "../upload-file-button";
interface File {
  // Определение свойств для типа File
  name: string;
  type: string;
  // и т.д.
}

interface Props {
  fileList: File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
}

const CustomInput: FC<Props> = ({ fileList, setFileList }) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const handleOpenFileMenu = () => {
    inputRef?.current.click();
  };
  const addFile = (): void => {
    if (fileList.length <= 100) {
      if (inputRef.current.files?.[0]) {
        fileInputChange(inputRef.current.files[0]);
        setFileList([]);
      }
    }
  };

  const selectedFile = (): void => {
    if (inputRef.current.files?.[0]) {
      setFileList([
        {
          name: inputRef.current.files[0].name,
          type: inputRef.current.files[0].type,
        },
        ...fileList,
      ]);
    }
  };
  return (
    <>
      <div className="input-system">
        <h1 className="input-system__title">Загрузить файлы:</h1>

        <input
          ref={inputRef}
          type="file"
          onChange={selectedFile}
          className="input-system__input"
          style={{ display: "none" }}
          name="myImage"
          accept="`${type}/*`"
        />
        <button className="input-system__button" onClick={handleOpenFileMenu}>
          Загрузить файлы
        </button>

        {fileList.length > 100 ? (
          <span style={{ color: "red" }}>
            Загружено слишком много файлов! Лимит = 100
          </span>
        ) : (
          ""
        )}
        <span className="input-system__info">
          Загружено файлов: {fileList.length}
        </span>

        <UplodaFileButton addFile={addFile} />
      </div>
    </>
  );
};

export default CustomInput;
