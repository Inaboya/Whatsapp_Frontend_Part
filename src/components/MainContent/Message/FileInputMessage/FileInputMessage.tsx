import React from 'react';

interface Props {
    [key: string]: any;
}

const FileInputMessage: React.FC<Props> = ({ selectedFile }) => {
  return (
      <>
        <div className="file_container" style={{height:"500px", width:"500px"}}>
              <p>{ selectedFile }</p>
        </div>
      </>
  )
}

export default FileInputMessage