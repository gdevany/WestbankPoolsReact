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
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file)
                     .field('tags', [`${this.props.project}`])
                     .field('public_id', `wbp/projects/${this.props.project}/` + file.name);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <form>
        <div className="FileUpload">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*">
            <div>{this.props.message}</div>
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img
              src={this.state.uploadedFileCloudinaryUrl}
              alt="test"
              className="projimg"
              />
          </div>}
        </div>
      </form>
    )
  }
}

export default AddImages;
