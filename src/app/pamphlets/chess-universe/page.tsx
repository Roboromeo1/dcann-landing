import type { Metadata } from 'next';
import ProductPamphlet from '@/components/ProductPamphlet';

export const metadata: Metadata = {
  title: 'Chess Universe Pamphlet - DCANNAI',
  description: 'A client ready Chess Universe product pamphlet for AI chess learning, live play, and academy portals.'
};

export default function ChessUniversePamphletPage() {
  return (
    <ProductPamphlet
      eyebrow="Chess Universe pamphlet"
      productName="Chess Universe"
      title="Chess learning, live play, and academy operations in one AI system."
      subtitle="Chess Universe powers DCANNAI Chess and Velammal academy experiences for students, players, coaches, and school partners who need training, review, tournaments, and academy workflows in one place."
      accentClassName="bg-[#f6d447]"
      productUrl="https://chess.dcannai.com"
      visual={{
        variant: 'velammal-academy',
        caption: 'Velammal academy portal surface rebuilt from the Chess app'
      }}
      metrics={[
        ['AI', 'Coach'],
        ['Live', 'Play'],
        ['Puzzles', 'Training'],
        ['Portal', 'Academies']
      ]}
      sections={[
        {
          title: 'What it does',
          items: [
            'Combines live play, time controls, puzzles, review, analysis, and AI coaching in a single chess workspace.',
            'Gives students a clear path from playing games to understanding mistakes and improving patterns.',
            'Supports school branded academy portals with leaderboards, tournaments, student hubs, and coaching operations.'
          ]
        },
        {
          title: 'Who it helps',
          items: [
            'Schools and academies that want a branded chess learning experience for students.',
            'Coaches who need structured review, practice, and student progress signals.',
            'Players who want fast games, guided training, and a smoother way to learn from every session.'
          ]
        },
        {
          title: 'Why DCANNAI',
          items: [
            'Already proven through the Velammal Chess Academy white label portal.',
            'Built around real product surfaces, not a static landing page or disconnected chess tools.',
            'Designed to scale from a single academy to a multi school learning and competition ecosystem.'
          ]
        }
      ]}
      proof={[
        {
          label: 'Already in academy use',
          detail: 'The platform supports the Velammal Chess Academy white label workflow with student, tournament, and coaching surfaces.'
        },
        {
          label: 'Built from real chess flows',
          detail: 'Live boards, queue states, review, analysis, and coaching tools are shown as product surfaces instead of abstract diagrams.'
        }
      ]}
    />
  );
}
