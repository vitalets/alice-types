export type Card = ImageButton | ItemsList | ImageGallery;

export interface ImageButton {
  text?: string;
  url?: string;
  payload?: unknown;
}

export interface BigImage {
  type: 'BigImage';
  image_id: string;
  title?: string;
  description?: string;
  button?: ImageButton;
}

export interface ItemsList {
  type: 'ItemsList';
  header?: {
    text: string;
  }
  items: ItemsListItem[];
  footer?: {
    text: string;
    button?: ImageButton;
  }
}

export interface ItemsListItem {
  image_id: string;
  title?: string;
  description?: string;
  button?: ImageButton;
}

export interface ImageGallery {
  type: 'ImageGallery';
  items: ImageGalleryItem[];
}

export interface ImageGalleryItem {
  image_id: string;
  title?: string;
}
