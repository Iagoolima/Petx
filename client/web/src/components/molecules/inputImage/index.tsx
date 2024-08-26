import React, { useState } from "react";
import { comprimirImage } from "./utils";

const InputImage = ({ image, setImage, linkImagem, updateImage }) => {
  const [update, setUpdate] = useState(updateImage);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      const compressedImage = await comprimirImage(file);
      setImage(compressedImage);
      setUpdate(false);
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  const handleCancelUpdate = () => {
    setImage(null);
    setUpdate(true);
  };

  const handleToggleUpdate = () => {
    setUpdate(!update);
  };

  return (
    <div className="w-full flex flex-col justify-center p-2 ">
      {update ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src={linkImagem}
            alt="Preview"
            className="max-h-72 w-full rounded-2xl p-2 object-contain"
          />
          <div className="flex justify-end">
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-custom-yellow text-custom-blue p-2 text-center rounded-md w-full"
              onClick={handleToggleUpdate}
            >
              Trocar Imagem
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
      ) : (
        <div>
          {image ? (
            <div className="flex items-center justify-center">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="max-h-72 w-full rounded-2xl p-2 object-contain"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-custom-blue p-2 rounded-md text-sm text-center w-full">
                Insira uma imagem do seu pet
              </p>
            </div>
          )}
          <div className="flex justify-end">
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-custom-yellow text-custom-blue p-2 text-center rounded-md w-full"
            >
              {image ? "Trocar Imagem" : "Selecionar Imagem"}
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          {updateImage && image && (
            <button
              onClick={handleCancelUpdate}
              className="mt-2 bg-red-500 text-white p-2 rounded-md w-auto"
            >
              Cancelar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InputImage;
