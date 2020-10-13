export function handleFile(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject('Error al cargar la imagen');
    };
  });
}
