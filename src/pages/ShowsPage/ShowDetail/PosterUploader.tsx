import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { ChangeEvent, useRef } from 'react';
import { deleteImages, postImages } from '~/apis/common';

type Props = {
  id?: number | null;
  url?: string;
  onChangePoster: (url: string, id: number | null) => void;
};

export const PosterUploader: React.FC<Props> = ({
  id,
  url,
  onChangePoster,
}) => {
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

  const deletePoster = async () => {
    const isDelete = confirm('포스터를 삭제하시겠습니까?');

    if (id && isDelete) {
      await deleteImages(id);
      onChangePoster('', null);
    }
  };

  const uploadPoster = async (posterFile: FormData) => {
    const res = await postImages(posterFile);
    const { url, id } = res.images[0];

    onChangePoster(url, id);
  };

  return (
    <>
      <StyledHeader>
        <StyledTitle>포스터</StyledTitle>
        <div>
          <StyledPosterInput
            ref={inputRef}
            accept="image/*"
            type="file"
            onChange={onChange}
          />
          <IconButton onClick={onClick}>
            <AddIcon />
          </IconButton>
          <IconButton onClick={deletePoster}>
            <DeleteIcon />
          </IconButton>
        </div>
      </StyledHeader>
      <StyledPosterContainer>
        <StyledPoster src={url ? url : ''} />
      </StyledPosterContainer>
    </>
  );
};

const StyledHeader = styled.div`
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

const StyledPosterContainer = styled.div`
  width: 500px;
  height: 670px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
`;

const StyledPoster = styled.img`
  width: 400px;
`;

const StyledPosterInput = styled.input`
  display: none;
`;
