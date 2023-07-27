import "./style.scss";
const UplodaFileButton = ({ addFile }: { addFile: () => void }) => {
  return (
    <button className="upload-button" onClick={addFile}>
      Отправить файлы
    </button>
  );
};

export default UplodaFileButton;
