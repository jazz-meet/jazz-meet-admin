import styled from '@emotion/styled';
import { useState } from 'react';
import { uploadImages } from '~/apis/image';
import { ALLOWED_EXTENSIONS } from '~/constants/fileExtension';
import { buttonStyle } from '~/styles/common';
import { Image } from './Image';

export const VenueImages: React.FC = () => {
  const [imageSources, setImageSources] = useState<string[]>();

  const addImageSources = (sources: string[]) => {
    setImageSources((prev) => {
      if (!prev) {
        return sources;
      }

      return [...prev, ...sources];
    });
  };

  const deleteImageSource = (source: string) => {
    setImageSources((prev) => {
      if (!prev) {
        return;
      }

      return prev.filter((prevSource) => prevSource !== source);
    });
  };

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = target.files;

    if (!fileList) {
      return;
    }

    (async () => {
      try {
        const response = await uploadImages([...fileList]);

        console.log(response);
        console.log(addImageSources);
        // TODO: response.data에 있는 이미지 주소를 imageSources에 추가
      } catch (error) {
        console.error(error);

        if (error instanceof Error) {
          alert(error.message);
        }
      }
    })();

    target.value = '';
  };

  return (
    <StyledVenueImages>
      <StyledHeader>
        <StyledLabel>공연장 이미지 등록</StyledLabel>
        <StyledAddButtonContainer>
          <span>+</span>
          <input
            type="file"
            accept={ALLOWED_EXTENSIONS.map((extension) => `.${extension}`).join(
              ',',
            )}
            multiple
            onChange={onInputChange}
          />
        </StyledAddButtonContainer>
      </StyledHeader>

      <StyledImages>
        {imageSources?.map((src) => (
          <Image
            key={src}
            src={src}
            onDeleteButtonClick={() => deleteImageSource(src)}
          />
        ))}
      </StyledImages>
    </StyledVenueImages>
  );
};

const StyledVenueImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledHeader = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledImages = styled.div`
  overflow-x: scroll;
  border: 1px solid #000000;
  border-radius: 8px;
  height: 200px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  user-select: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledAddButtonContainer = styled.div`
  ${buttonStyle}
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
  }
`;
