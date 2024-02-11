import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Fridge } from '~/components/fridge';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Fridge />
    </main>
  )
}
