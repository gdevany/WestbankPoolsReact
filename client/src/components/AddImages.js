import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'um4mdnly';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/gdevany/upload';

class AddImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: '',
      selectedMainImage: false,
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  removeExtension(fullName) {
    var idx = fullName.indexOf(".");
    var withoutExt = fullName.slice(0,idx);
    console.log(withoutExt);
    return withoutExt;
  }

  handleImageUpload(file) {
    var tag = `${this.props.project}`;
    if (this.state.selectedMainImage === false) {
      tag = `${this.props.project}, main`;
    }

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file)
                     .field('alt', `${this.props.project} project image`)
                     .field('tags', [tag])
                     .field('public_id', `wbp/projects/${this.props.project}/` + this.removeExtension(file.name));
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        console.log(this.state.uploadedFileCloudinaryUrl);
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
          selectedMainImage: true
        });
      }
    });
  }

  render() {
    var message = "CLICK HERE (or drag here) to add MAIN project image";
    if (this.state.selectedMainImage === true) {
      message = "Great! Now add project images";
    }

    var viewBox = "";
    if(!this.props.project) {
      viewBox = <div></div>
    } else {
      viewBox = (
        <div className='d-flex justify-content-center padtop2 padbottom2'>
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*">
            <div>{message}</div>
          </Dropzone>
        </div>
      )
    }

    return (
      <form>
        <div className="">
          {viewBox}
        </div>
        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div className="padbottom2">
            <p>Confirmation Image: </p>
            <p>{this.state.uploadedFile.name}</p>
            <img
              src={this.state.uploadedFileCloudinaryUrl}
              alt="test"
              className="imgAddConfirm"
              />
          </div>}
        </div>
      </form>
    )
  }
}

export default AddImages;
