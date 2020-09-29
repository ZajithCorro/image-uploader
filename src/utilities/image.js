export function handleFile(file, setImage, setPreview) {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    setImage(reader.result);
    setPreview(reader.result);
  };
}
