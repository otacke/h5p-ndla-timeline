import { Image, Video } from "h5p-types";

export type MediaType =
  | {
      mediaType: "image";
      image?: Image;
    }
  | {
      mediaType: "video";
      video?: Array<Video>;
    }
  | {
      mediaType: "custom";
      customMedia?: string;
    }
  | {
      mediaType: "none";
    };
