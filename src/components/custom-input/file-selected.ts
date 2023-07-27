import axios from "axios";

const token =
  "OAuth y0_AgAAAABM-l2fAAo_WwAAAADoyjULFThz8AqBR_WtBX43neVWf187pwk";
export const fileInputChange = (file: File) => {
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      axios
        .get(
          encodeURI(
            `https://cloud-api.yandex.net:443/v1/disk/resources/upload?path=/test/${file.name}&overwrite=true`
          ),
          {
            headers: {
              Authorization: `OAuth ${token}`,
            },
          }
        )
        .then((res) => {
          const uploadUrl = res.data.href;
          const fileData = e.target?.result;

          axios
            .put(uploadUrl, fileData, {
              headers: {
                "Content-Type": file.type,
              },
            })
            .then((uploadRes) => {
              console.log("Файл успешно загружен", uploadRes);
            })
            .catch((uploadErr) => {
              console.log("Ошибка загрузки файла", uploadErr);
            });
        })
        .catch((err) => {
          console.log("Ошибка получения URL для загрузки", err);
        });
    };
  }
};
