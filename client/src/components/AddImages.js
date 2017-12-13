import React from 'react';
// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
var cloudinary = require('cloudinary');

class AddImages extends React.Component {

    uploadWidget() {
        cloudinary.openUploadWidget({ cloud_name: 'gdevany', upload_preset: 'PRESET', tags:['testIt']},
            function(error, result) {
                console.log(result);
            });
    }
    render(){
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}

export default AddImages;
