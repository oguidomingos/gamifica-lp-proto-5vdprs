import classes from 'styles/components/ImageCard.module.scss';

interface IImageProps {
  image: string;
  alt?: string;
}

export function ImageCard({ image, alt = 'Imagem' }: IImageProps) {
  return (
    <div className={classes.container}>
      <img src={image} alt={alt} />
    </div>
  );
}
