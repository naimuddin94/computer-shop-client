const ImageUpload = async (imageFile: File) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "pntxhvfd");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dxoncladp/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data.secure_url;
};

export default ImageUpload;
