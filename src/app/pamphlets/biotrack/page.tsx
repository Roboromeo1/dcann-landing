import type { Metadata } from 'next';
import ProductPamphlet from '@/components/ProductPamphlet';

export const metadata: Metadata = {
  title: 'BioTrack Pamphlet - DCANNAI',
  description: 'A client ready BioTrack product pamphlet for preventive health intelligence and biomarker tracking.'
};

export default function BioTrackPamphletPage() {
  return (
    <ProductPamphlet
      eyebrow="BioTrack pamphlet"
      productName="BioTrack"
      title="Preventive health intelligence with the full record in context."
      subtitle="BioTrack turns scattered lab results, biomarkers, lifestyle goals, and medical history into a clean health memory for review, export, and ongoing prevention."
      accentClassName="bg-[#eef7f1]"
      productUrl="https://biotrack.dcannai.com"
      visual={{
        variant: 'biotrack-dashboard',
        caption: 'Dashboard style product surface rebuilt from the BioTrack app'
      }}
      metrics={[
        ['130+', 'Biomarkers'],
        ['24/7', 'Health memory'],
        ['PDF', 'Exports'],
        ['AI', 'Review support']
      ]}
      sections={[
        {
          title: 'What it does',
          items: [
            'Organises bloodwork, biomarker history, fasting data, medications, supplements, and lifestyle signals.',
            'Flags what is optimal, improving, or worth reviewing without turning the dashboard into medical noise.',
            'Keeps long term context so every new result can be compared against the full personal record.'
          ]
        },
        {
          title: 'Who it helps',
          items: [
            'Individuals tracking preventive health, metabolic markers, and long term lifestyle changes.',
            'Clinics and coaches who need cleaner context before a consultation or review.',
            'Users managing GLP 1 journeys, cholesterol, vitamin levels, inflammation, and routine health checks.'
          ]
        },
        {
          title: 'Why DCANNAI',
          items: [
            'Designed as a focused product surface, not a generic spreadsheet or wellness note app.',
            'Built for fast review, simple exports, and a calm interface people can return to repeatedly.',
            'Extensible into partner workflows for health intelligence, reporting, and research programs.'
          ]
        }
      ]}
      proof={[
        {
          label: 'Designed for repeat review',
          detail: 'The interface keeps the most important health signals visible without asking users to decode raw lab reports.'
        },
        {
          label: 'Ready for client handoff',
          detail: 'The pamphlet gives clinics, coaches, and individual users a fast way to understand the product before a demo.'
        }
      ]}
    />
  );
}
