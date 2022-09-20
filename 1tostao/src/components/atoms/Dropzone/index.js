import React, {useEffect, useState} from 'react'
import { useDropzone } from 'react-dropzone'
import { Container, Thumb, ThumbsContainer, Img, ThumbInner } from './styled'
import { useDrop } from '../../../request/hooks/Dropzone'
import { encodeBase64 } from '../../../request/utils/base64'

const MyDropzone = () => {
  const [files, setFiles] = useState(['']);
  const { dropzone, setDropzone } = useDrop()
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject, 
    isDragActive,
  } = useDropzone({accept: {'image/*': []},  maxFiles:3, 
  onDrop: acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }});

  const thumbs = files.map(file => (
    <Thumb key={file.name}>
      <ThumbInner >
        <Img
          src={file.preview}
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(() => {
    console.log('files: ', files)
    if(!files) encodeBase64(files).then((response) => {setDropzone(response)})
    setDropzone(files)
    const data = encodeBase64(dropzone)
    console.log(data)
  }, [files])

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <Container {...getRootProps({isFocused,isDragAccept,isDragReject})}>
        <input {...getInputProps()} value={''} type='file'/>
        {
          isDragActive ?
            <p>Adicione...</p> :
            <p>Arraste as imagens para cá!</p>
        }
      </Container>
      <ThumbsContainer>
        {thumbs}
      </ThumbsContainer>
    </>
  
  )
}

export default MyDropzone