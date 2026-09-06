import type { Metadata } from 'next';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { ProgramsBanner } from '@/components/programs/ProgramsBanner';
import { ProgramsList } from '@/components/programs/ProgramsList';

export const metadata: Metadata = { title: 'Programs - OX Versity' };

export default function ProgramsPage() {
  return (
    <SiteShell>
      <div className="framer-OAXg4 framer-EpkeD framer-H9bCC framer-1ijzfe8" data-framer-root="" style={PAGE_ROOT_STYLE}>
        <ProgramsBanner />
        <ProgramsList />
      </div>
    </SiteShell>
  );
}
