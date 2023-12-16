import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { ChangeEvent, useRef } from 'react';
import { postImages } from '~/apis/common';

type Props = {
  url?: string;
  onChangePoster: (url: string, id: number) => void;
};

export const PosterUploader: React.FC<Props> = ({ url, onChangePoster }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList?.length) return;

    const formData = new FormData();
    const file = fileList[0];
    formData.append('image', file);

    if (file && file.type.startsWith('image/')) {
      uploadPoster(formData);
    } else {
      event.target.value = '';
      alert('이미지 파일만 업로드 가능합니다.');
    }
  };

  const uploadPoster = async (posterFile: FormData) => {
    const res = await postImages(posterFile);
    const { url, id } = res.images[0];

    onChangePoster(url, id);
  };

  return (
    <>
      <Header>
        <StyledTitle>포스터</StyledTitle>
        <div>
          <PosterInput
            ref={inputRef}
            accept="image/*"
            type="file"
            onChange={onChange}
          />
          <IconButton onClick={onClick}>
            <AddIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </Header>
      <PosterContainer>
        <StyledPoster src={url ? url : ''} />
      </PosterContainer>
    </>
  );
};

const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const PosterContainer = styled.div`
  width: 400px;
  height: 670px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0 50px;
`;

const StyledPoster = styled.img`
  width: 400px;
`;

const PosterInput = styled.input`
  display: none;
`;
