import { site } from '@/data/site.data';

export default function AnnouncementBar() {
  return (
    <div className="announcement" title={site.announcementNote}>
      {site.announcement}
    </div>
  );
}
