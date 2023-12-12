import styled from '@emotion/styled';
import { uploadImages } from '~/apis/image';
import { ALLOWED_EXTENSIONS } from '~/constants/fileExtension';
import { buttonStyle } from '~/styles/common';
import { usePostVenueFormStore } from '../usePostVenueFormStore';
import { Image } from './Image';

export const Images: React.FC = () => {
  const { images, addImage, deleteImage } = usePostVenueFormStore(
    ({ images: images, addImage, deleteImage }) => ({
      images,
      addImage,
      deleteImage,
    }),
  );

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = target.files;

    if (!fileList) {
      return;
    }

    (async () => {
      try {
        const response = await uploadImages([...fileList]);

        addImage(response.images);
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
    <StyledImages>
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

      <StyledImageContainer>
        {images?.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            onDeleteButtonClick={() => deleteImage(image.id)}
          />
        ))}
      </StyledImageContainer>
    </StyledImages>
  );
};

const StyledImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledHeader = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledImageContainer = styled.div`
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
  position: relative;
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
