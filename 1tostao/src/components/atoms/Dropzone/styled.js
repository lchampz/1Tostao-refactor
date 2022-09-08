import styled from 'styled-components'

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#24D39A';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
  }

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  width: 93%;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #292929;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
` 
export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 88px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
` 
export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`

export const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`