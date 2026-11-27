import { site } from '@/data/site.data';

export default function AnnouncementBar() {
  return (
    <div
      className="bg-cream px-4 py-2 text-center text-xs tracking-[0.02em] text-ink sm:px-8"
      title={site.announcementNote}
    >
      {site.announcement}
    </div>
  );
}
