/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import {
  Network,
  Shield,
  RadioTower,
  Code,
  Gauge,
  DollarSign,
  Users,
  Boxes,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: 'fast',
      num: '01',
      title: t('Adaptive Routing Core'),
      desc: t(
        'Policy based routing chooses the best upstream by latency, quota, health, and cost'
      ),
      span: 'md:col-span-2',
      icon: <Network className='size-4 text-cyan-300' />,
      visual: (
        <div className='mt-4 grid grid-cols-3 gap-2'>
          {['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Llama'].map(
            (name) => (
              <div
                key={name}
                className='border-cyan-200/10 bg-cyan-300/5 text-muted-foreground flex items-center justify-center rounded-lg border px-3 py-2 text-xs transition-colors duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100'
              >
                {name}
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'secure',
      num: '02',
      title: t('Token Vault'),
      desc: t(
        'Issue scoped keys, isolate teams, and keep sensitive upstream credentials controlled'
      ),
      span: 'md:col-span-1',
      icon: <Shield className='size-4 text-emerald-400' />,
      visual: (
        <div className='mt-4 flex items-center justify-center'>
          <div className='relative'>
            <div className='flex size-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5'>
              <Shield
                className='size-7 text-emerald-500/70'
                strokeWidth={1.5}
              />
            </div>
            <div className='absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.75)]'>
              <svg
                className='size-2.5 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 12.75 6 6 9-13.5'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      num: '03',
      title: t('Signal Monitor'),
      desc: t('Live observability for latency, error spikes, spend, and route health'),
      span: 'md:col-span-1',
      icon: <RadioTower className='size-4 text-violet-300' />,
      visual: (
        <div className='mt-4 space-y-2'>
          {[t('Latency'), t('Quota'), t('Spend')].map(
            (step, i) => (
              <div key={step} className='flex items-center gap-2'>
                <div
                  className={`flex size-6 items-center justify-center rounded-full text-[10px] font-bold ${
                    i === 1
                      ? 'border border-blue-500/30 bg-blue-500/20 text-blue-500'
                      : 'border-border/40 bg-muted text-muted-foreground border'
                  }`}
                >
                  {i + 1}
                </div>
                <div className='bg-border/40 h-px flex-1' />
                <span className='text-muted-foreground text-xs'>{step}</span>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'developer',
      num: '04',
      title: t('Protocol Bridge'),
      desc: t('Expose compatible routes while keeping provider differences behind one control layer'),
      span: 'md:col-span-2',
      icon: <Code className='size-4 text-amber-400' />,
      visual: (
        <div className='mt-4 flex items-center gap-3'>
          <div className='flex -space-x-2'>
            {['API', 'SDK', 'CLI', 'Docs'].map((n) => (
              <div
                key={n}
                className='border-background from-muted to-muted/60 text-muted-foreground flex size-8 items-center justify-center rounded-full border-2 bg-gradient-to-br text-[9px] font-bold'
              >
                {n}
              </div>
            ))}
          </div>
          <div className='text-muted-foreground flex items-center gap-1.5 text-xs'>
            <Code className='size-3.5 text-cyan-300' />
            {t('OpenAI, Claude, Gemini, image, audio, and realtime')}
          </div>
        </div>
      ),
    },
  ]

  const additionalFeatures = [
    {
      icon: <Gauge className='size-5' strokeWidth={1.5} />,
      title: t('High Throughput'),
      desc: t('Built for concurrent request flow and resilient upstream failover'),
    },
    {
      icon: <DollarSign className='size-5' strokeWidth={1.5} />,
      title: t('Cost Intelligence'),
      desc: t('Track token spend with realtime quota and billing visibility'),
    },
    {
      icon: <Users className='size-5' strokeWidth={1.5} />,
      title: t('Team Control'),
      desc: t('Segment keys, groups, channels, and user permissions cleanly'),
    },
    {
      icon: <Boxes className='size-5' strokeWidth={1.5} />,
      title: t('Self-hosted Stack'),
      desc: t('Deploy your own gateway while preserving full operational control'),
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-lg'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('OToken Control Plane')}
          </p>
          <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-3xl'>
            {t('Token routing,')}
            <br />
            {t('designed for operators')}
          </h2>
        </AnimateInView>

        {/* Bento grid */}
        <div className='border-cyan-200/10 bg-cyan-200/10 grid gap-px overflow-hidden rounded-xl border md:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation='scale-in'
              className={`bg-background/80 group hover:bg-cyan-300/[0.04] p-7 backdrop-blur-xl transition-colors duration-300 md:p-8 ${f.span}`}
            >
              <div className='mb-3 flex items-center gap-3'>
                <span className='border-cyan-300/20 bg-cyan-300/10 text-cyan-100 flex size-7 items-center justify-center rounded-md border text-[10px] font-semibold tabular-nums'>
                  {f.num}
                </span>
                <h3 className='text-sm font-semibold'>{f.title}</h3>
              </div>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                {f.desc}
              </p>
              {f.visual}
            </AnimateInView>
          ))}
        </div>

        {/* Additional features row */}
        <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12'>
          {additionalFeatures.map((f, i) => (
            <AnimateInView
              key={f.title}
              delay={i * 100}
              animation='fade-up'
              className='flex flex-col items-center text-center'
            >
              <div className='text-primary border-cyan-300/20 bg-cyan-300/10 mb-3 flex size-12 items-center justify-center rounded-xl border transition-colors'>
                {f.icon}
              </div>
              <h3 className='mb-1.5 text-sm font-semibold'>{f.title}</h3>
              <p className='text-muted-foreground max-w-[200px] text-xs leading-relaxed'>
                {f.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
