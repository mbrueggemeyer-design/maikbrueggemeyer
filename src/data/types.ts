export type ArchiveEntry = {
  id: string;
  date: string;
  title: string;
  teaser: string;

  format:
    | "Essay"
    | "Kritik"
    | "Interview"
    | "Kolumne"
    | "Podcast"
    | "Newsletter"
    | "Buch"
    | "Vortrag";

  topic:
    | "Pop"
    | "Literatur"
    | "Film"
    | "Gesellschaft"
    | "Politik";

  publication: string;
  url: string;
  featured?: boolean;

  bookType?:
    | "Roman"
    | "Sachbuch"
    | "Herausgabe"
    | "Buchbeitrag"
    | "Übersetzung";
};