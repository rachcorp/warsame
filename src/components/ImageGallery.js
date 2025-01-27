'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const GallerySection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
  color: #e31837;
`;

const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  letter-spacing: 0.1em;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;

  .modal-image {
    position: relative !important;
    max-width: 90vw;
    max-height: 90vh;
    width: auto !important;
    height: auto !important;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #e31837;
    color: white;
  }
`;

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  // Update this array with your actual image names
  const imageList = [
    '/images/warsame-volunteer.jpeg',
    '/images/warsamecasual.jpeg',
    '/images/warsameparty.jpeg',
    // Add more image paths here
  ];

  useEffect(() => {
    setImages(imageList);
  }, []);

  return (
    <GallerySection>
      <GalleryTitle>Gallery</GalleryTitle>
      <GalleryGrid>
        {images.map((image, index) => (
          <ImageContainer key={index} onClick={() => setSelectedImage(image)}>
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </ImageContainer>
        ))}
      </GalleryGrid>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
          <Image
            src={selectedImage}
            alt="Selected image"
            fill
            className="modal-image"
            style={{ objectFit: 'contain' }}
          />
        </Modal>
      )}
    </GallerySection>
  );
} 