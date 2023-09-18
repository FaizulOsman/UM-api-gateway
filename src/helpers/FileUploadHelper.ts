import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dwp2h8pns',
  api_key: '375281769446263',
  api_secret: 'VSAowkzR6FTePPCuzU9mthtR_7A'
});

const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const FileUploadHelper = {
  uploadToCloudinary
};
